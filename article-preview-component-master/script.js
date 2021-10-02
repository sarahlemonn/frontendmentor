const arrow = document.getElementById('arrow');
const shareBarMobile = document.getElementById('share-bar-mobile');
const shareBarDesktop = document.getElementById('share-bar-desktop');
const logosNetwork = shareBarDesktop.children;

arrow.addEventListener('click', () => {

    if(window.innerWidth < 850) {
        if(!arrow.classList.contains('arrow-active-mobile')) {
            arrow.children[0].children[0].attributes[0].nodeValue = 'white';
        } else {
            arrow.children[0].children[0].attributes[0].nodeValue = '#6E8098';
        }

        arrow.classList.toggle('arrow-active-mobile');

        shareBarMobile.classList.toggle('share-bar-mobile-active');
    } else {

        if(!arrow.classList.contains('arrow-active-desktop')) {
            arrow.children[0].children[0].attributes[0].nodeValue = 'white';
        } else {
            arrow.children[0].children[0].attributes[0].nodeValue = '#6E8098';
        }

        arrow.classList.toggle('arrow-active-desktop');

        shareBarDesktop.classList.toggle('share-bar-desktop-active');

        if(shareBarDesktop.classList.contains('share-bar-desktop-active')) {
            
            for(let i = 1; i < logosNetwork.length; i++) {
                let logoNetwork = logosNetwork[i];
                logoNetwork.style.cursor = 'pointer';
            }
        } else {
            for(let i = 1; i < logosNetwork.length; i++) {
                let logoNetwork = logosNetwork[i];
                logoNetwork.style.cursor = 'default';
            }
        }

    }
    
})