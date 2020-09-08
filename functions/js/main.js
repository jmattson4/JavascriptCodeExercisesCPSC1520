function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue
}

function strong(value) {
    return '<strong>' + value + '</strong>'
}

updateInnerHTML('h1', 'updated text');

pImportant = document.querySelector('section > p.important').innerHTML

updateInnerHTML('section > p.important', strong(pImportant))


