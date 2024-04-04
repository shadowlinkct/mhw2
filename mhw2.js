function topbar() {
    const activeDiv = document.getElementById('active');
    activeDiv.classList.remove('hidden');
    menubutt.removeEventListener('click', topbar);
    menubutt.addEventListener('click', topbarclose);
}

function topbarclose() {
    const activeDiv = document.getElementById('active');
    activeDiv.classList.add('hidden');
    menubutt.removeEventListener('click', topbarclose);
    menubutt.addEventListener('click', topbar);
}

const menubutt = document.getElementById('menu');
menubutt.addEventListener('click', topbar);


const RIGHT_ARROW = 'img/forward-arrow.png';
const DOWN_ARROW = 'img/down-arrow.png';

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

let isVisible = false;
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