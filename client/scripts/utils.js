function makeOptions(method, data) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return options
}

async function fetchPost(uri, data) {
    return await fetch(uri, makeOptions("POST", data))
}

export default fetchPost