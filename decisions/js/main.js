var featureLink = document.querySelector('a.feature');

function featureLinkHandler(evt) {
    let featureImage = document.querySelector('img.feature');
    if (featureLink.innerHTML == 'View Barcelona') {
        featureImage.src = featureLink.href;
        featureLink.innerHTML = 'Hide Barcelona';
        featureImage.classList.remove('hidden');
    } else {
        featureImage.src = '';
        featureLink.innerHTML = 'View Barcelona';
        featureImage.classList.add('hidden');
    }

    evt.preventDefault();
}

featureLink.addEventListener('click', featureLinkHandler);