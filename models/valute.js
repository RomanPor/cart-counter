const https = require('https');

const VALUTES = [ 'EUR', 'USD' ]

const getValute = () => {
    return new Promise((resolve, reject) => {
        https.get('https://www.cbr-xml-daily.ru/daily_json.js', function (response) {
            let json = '';
            response.on('data', function (chunk) {
                json += chunk;
            });
            response.on('end', function () {
                if (response.statusCode === 200) {
                    try {
                        const convert = JSON.parse(json);
                        let filter = {};
                        VALUTES.forEach(it => filter[it] = convert['Valute'][it]['Value']);
                        resolve(filter);
                    } catch (e) {
                        reject('Error parsing JSON!')
                    }
                } else {
                    reject(`Status: ${response.statusCode}`)
                }
            });
        }).on('error', function (err) {
            reject(`Error:', ${err}`)
        });
    });
}

module.exports = getValute;
