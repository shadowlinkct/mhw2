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


const RIGHT_ARROW = 'img/forward-arrow.png';
const DOWN_ARROW = 'img/down-arrow.png';

function toggle(event) {
  const targetId = event.currentTarget.id + "Content"; // Ottieni l'ID del contenuto correlato
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
function handleClickOutside(event) {
  isVisible = false;
  // Esegui altre azioni necessarie quando viene fatto clic al di fuori degli elementi toggle
}
const toggleItems = document.querySelectorAll('.toggle-item');

for (let i = 0; i < toggleItems.length; i++) {
  toggleItems[i].addEventListener('click', toggle);
}

