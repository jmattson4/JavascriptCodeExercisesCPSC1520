// Enter JavaScript for the exercise here...

var checks = document.querySelectorAll('[name=message]');
var rows = document.querySelectorAll('tbody>tr');

for (let index = 0; index < checks.length; index++) {
    console.log(checks[index])
    checks[index].addEventListener('change', event => {
        if (event.target.checked) {
            rows[index].classList.add('selected-item')
        } else {
            rows[index].classList.remove('selected-item')
        }
    })
}

document.querySelector('[name=toggle]').addEventListener('change', event => {
    for (let index = 0; index < checks.length; index++) {
        if (event.target.checked) {
            rows[index].classList.add('selected-item');
            checks[index].checked = true;
        } else {
            rows[index].classList.remove('selected-item');
            checks[index].checked = false;
        }
    }
})


/**
 * Selects the search form and adds a listener which is used to search through the
 *  messages. Then display to the user which messages contain the given string.
 * 
 */
document.querySelector('form.search-frm').addEventListener('submit', event => {
    let searchFrm = event.target;
    let searchTags = searchFrm.elements.search;
    let messages = document.querySelectorAll('td.message-text');
    let error = document.querySelector('p.search-error');
    if (searchTags.value.trim() != '') {
        for (let index = 0; index < messages.length; index++) {
            let lowerCaseMessage = messages[index].innerHTML.toLowerCase();
            let includesBool = lowerCaseMessage.includes(searchTags.value.toLowerCase());
            if (includesBool === true) {
                rows[index].classList.add('selected-item');
                checks[index].checked = true;
            } else {
                rows[index].classList.remove('selected-item');
                checks[index].checked = false;
            }
        }
        error.classList.add('hidden');
    } else {
        error.innerHTML = 'Search cannot be empty. Please enter a Search string.';
        error.classList.remove('hidden');
    }
    event.preventDefault();
})