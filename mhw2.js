function topbar() {
    const activeDiv = document.getElementById('active');
    activeDiv.classList.remove('hidden');
    menubutt.removeEventListener('click', topbar); // Rimuovi l'event listener per topbar
    menubutt.addEventListener('click', topbarclose); // Aggiungi l'event listener per topbarclose
}

function topbarclose() {
    const activeDiv = document.getElementById('active');
    activeDiv.classList.add('hidden');
    menubutt.removeEventListener('click', topbarclose); // Rimuovi l'event listener per topbarclose
    menubutt.addEventListener('click', topbar); // Aggiungi l'event listener per topbar
}

const menubutt = document.getElementById('menu');
menubutt.addEventListener('click', topbar);
