export default class DataService {
    getCatalog() {
        return fetch('/catalog/list').then(data => data.json());
    }
    postCart(data) {
        return fetch('/cart/count', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
}
