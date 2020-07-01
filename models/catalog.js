const fs = require('fs');
const path = require('path')

const catalogFilePath = path.join(__dirname, '..', 'catalog.json');

const getCatalog = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(
            catalogFilePath,
            'utf-8',
            (err, content) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(content))
                }
            }
        )
    })
}

module.exports = getCatalog;
