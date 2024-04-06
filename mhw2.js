
const RIGHT_ARROW = 'img/forward-arrow.png';
const DOWN_ARROW = 'img/down-arrow.png';
const BOOKMARKPINNED = 'img/bookmark.png';
const BOOKMARKNOTPINNED = 'img/bookmarkno.png';
const CLOSEIMG = 'img/closeX.png';


function toggleTopbar() {
    const activeDiv = document.getElementById('active');
    activeDiv.classList.toggle('hidden');
}

const menubutt = document.getElementById('menu');
menubutt.addEventListener('click', toggleTopbar);

//                       EQUIVALENTE 
// function topbar() {
//   const activeDiv = document.getElementById('active');
//   activeDiv.classList.remove('hidden');
//   menubutt.removeEventListener('click', topbar);
//   menubutt.addEventListener('click', topbarclose);
// }

// function topbarclose() {
//   const activeDiv = document.getElementById('active');
//   activeDiv.classList.add('hidden');
//   menubutt.removeEventListener('click', topbarclose);
//   menubutt.addEventListener('click', topbar);
// }

// const menubutt = document.getElementById('menu');
// menubutt.addEventListener('click', topbar);

//CENTERLINKFINESTRE
let isVisible = false;
function toggle(event) {
    const targetId = event.currentTarget.id + "Content";
    const content = document.getElementById(targetId);

    isVisible = !isVisible;
    if (isVisible) {
        content.classList.remove('hidden');
        event.currentTarget.querySelector('img').src = DOWN_ARROW;
    } else {
        content.classList.add('hidden');
        event.currentTarget.querySelector('img').src = RIGHT_ARROW;
    }
}
function clickesterno(event) {
    // Verifica se l'elemento cliccato non è uno dei toggleItems
    let esternocliccato = true;
    for (let i = 0; i < toggleItems.length; i++) {
        if (toggleItems[i].contains(event.target)) {
            esternocliccato = false;
            break;
        }
        console.log("esternocliccato:", esternocliccato);
    }

    // Se il click è esterno e isVisible è true, nascondi tutti gli elementi
    if (esternocliccato && isVisible) {
        for (let i = 0; i < toggleItems.length; i++) {
            const targetId = toggleItems[i].id + "Content";
            const content = document.getElementById(targetId);
            content.classList.add('hidden');
            toggleItems[i].querySelector('img').src = RIGHT_ARROW;
        }
        isVisible = false;
        console.log("isVisible:", isVisible);
    }
}

const toggleItems = document.querySelectorAll('.centerlink-item');

for (let i = 0; i < toggleItems.length; i++) {
    toggleItems[i].addEventListener('click', toggle);
}
document.addEventListener("click", clickesterno);

//ICONAPREFERITI
function changeBookmarkImage(event) {
    const bookmark = event.target;
    bookmark.classList.toggle('clicked');
    if (bookmark.classList.contains('clicked')) {
        bookmark.src = BOOKMARKPINNED;
    } else {
        bookmark.src = BOOKMARKNOTPINNED;
    }
}

for (let i = 1; i <= 14; i++) {
    const bookmark = document.getElementById('bookmark' + i);
    bookmark.addEventListener('click', changeBookmarkImage);
}

// ATTRIBUTI DATA
function creaDataDiv() {
    // Verifica se esiste già un div con className 'infoDiv'
    let existingDiv = document.querySelector('.infoDiv');
    if (existingDiv) {
        return; // Se esiste, interrompe l'esecuzione della funzione
    }
    let dataAttributes = this.dataset;
    let infoDiv = document.createElement('div');
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    infoDiv.className = 'infoDiv';
    imgDiv.className = 'imgDiv';
    img.src = CLOSEIMG;
    img.className = 'closeButton';
    infoDiv.appendChild(imgDiv);
    imgDiv.appendChild(img);

    function rimuoviDiv() {
        // Otteniamo l'elemento genitore del div
        var parentElement = infoDiv.parentNode;
        // Rimuoviamo il div dal suo genitore
        parentElement.removeChild(infoDiv);
    }
    img.addEventListener('click', rimuoviDiv);
    for (let key in dataAttributes) {
        let p = document.createElement('p');
        p.textContent = key + ': ' + dataAttributes[key];
        infoDiv.appendChild(p);
    }
    document.body.appendChild(infoDiv);
}
const div = document.getElementById('alink2');
div.addEventListener('click', creaDataDiv);