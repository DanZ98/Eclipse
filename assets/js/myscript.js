const hamMenuBars = document.querySelector('.mobile-bars');

hamMenuBars.addEventListener('click', function(){
    hamMenuBars.classList.toggle('toggle');
});

function hamMenuDisplay() {
    const hamMenuItems = document.querySelector('.mobile-nav');
    const overlayBg = document.querySelector('.overlay');

    if (hamMenuItems.style.display === 'block' && overlayBg.style.display === 'block') {
        hamMenuItems.style.display = 'none';
        overlayBg.style.display = 'none';
    } else {
        hamMenuItems.style.display = 'block';
        overlayBg.style.display = 'block';
    }
}



