

const RIGHT_ARROW = 'img/forward-arrow.png';
const DOWN_ARROW = 'img/down-arrow.png';
const BOOKMARKPINNED = 'img/bookmark.png';
const BOOKMARKNOTPINNED = 'img/bookmarkno.png';
const CLOSEIMG = 'img/closeX.png';

function existingDiv(selector) {
    let existingDiv = document.querySelector(selector);
    if (existingDiv) {
        return true;
    }
    return false;
}
function toggleTopbar() {
    const activeDiv = document.querySelector('#active');
    activeDiv.classList.toggle('hidden');
}

const menubutt = document.querySelector('#menu');
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
let ultimoElementoCliccato = null;
let ultimoElementoCliccatoIMG = null;
let isVisible = false;

function toggle(event) {
    const targetId = event.currentTarget.id + "Content";
    const content = document.querySelector('#' + targetId);
    const targetIdIMG = event.currentTarget.id;
    const contentimg = document.querySelector('#' + targetIdIMG);

    // Se c'è un elemento precedentemente cliccato, nascondilo
    if (ultimoElementoCliccato !== null) {
        ultimoElementoCliccato.classList.add('hidden');
        ultimoElementoCliccatoIMG.querySelector('img').src = RIGHT_ARROW;
    }

    // Se l'elemento corrente è già visibile, nascondilo
    if (isVisible && ultimoElementoCliccato === content) {
        content.classList.add('hidden');
        event.currentTarget.querySelector('img').src = RIGHT_ARROW;
        isVisible = false;
    } else {
        // Altrimenti, mostra l'elemento corrente
        content.classList.remove('hidden');
        event.currentTarget.querySelector('img').src = DOWN_ARROW;
        isVisible = true;
    }

    // Aggiorna l'ultimo elemento cliccato
    ultimoElementoCliccato = content;
    ultimoElementoCliccatoIMG = contentimg;
}

function clickesterno(event) {
    // Verifica se l'elemento cliccato non è uno dei toggleItems
    let esternocliccato = true;
    for (let i = 0; i < toggleItems.length; i++) {
        if (toggleItems[i].contains(event.target)) {
            esternocliccato = false;
            console.log("esternocliccato:", esternocliccato);
            break;
        }
    }

    // Se il click è esterno e isVisible è true, nascondi tutti gli elementi
    if (esternocliccato && isVisible) {
        for (let i = 0; i < toggleItems.length; i++) {
            const targetId = toggleItems[i].id + "Content";
            const content = document.querySelector('#' + targetId);
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
    const bookmark = document.querySelector('#bookmark' + i);
    bookmark.addEventListener('click', changeBookmarkImage);
}

// ATTRIBUTI DATA
function creaDataDiv() {
    // Verifica se esiste già un div con className 'infoDiv'
    if (existingDiv('.infoDiv')) {
        return;
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
const div = document.querySelector('#alink2');
div.addEventListener('click', creaDataDiv);

function assistenzabtn() {
    if (existingDiv('.divassist')) {
        return;
    }
    let dataAttributes = this.dataset;
    let divassist = document.createElement('div');
    divassist.className = 'divassist';
    let divassistcontent = document.createElement('div');
    divassistcontent.className = 'divassistcontent';
    let imgDiv = document.createElement('div');
    imgDiv.className = 'DivCloseAssist';
    let assisth1 = document.createElement('h1');
    let img = document.createElement('img');
    img.src = CLOSEIMG;
    document.body.appendChild(divassist);
    divassist.appendChild(imgDiv);
    imgDiv.appendChild(assisth1);
    imgDiv.appendChild(img);
    divassist.appendChild(divassistcontent);
    
    let classNames = ['assistcontentitem', 'assistcontentitem', 'assistcontentitem', 'assistcontentitem'];
    for (let i = 0; i < classNames.length; i++) {
        let element = document.createElement('div');
        element.className = classNames[i];
        divassistcontent.appendChild(element);
    }
    assisth1.textContent = "Assistenza";
    function rimuoviDiv() {
        var parentElement = divassist.parentNode;
        parentElement.removeChild(divassist);
    }
    img.addEventListener('click', rimuoviDiv);
}
const assistbtn = document.querySelector('.fixed-button');
assistbtn.addEventListener('click', assistenzabtn);
