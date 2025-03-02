let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let size = 20;

yesButton.addEventListener('click', () => {
    size += 20;
    yesButton.style.fontSize = size + 'px';
    yesButton.style.padding = (size / 4) + 'px';
    if (size > 150) {
        document.body.innerHTML = '<h1>Will You Marry Namiii? 💍❤️</h1>';
    }
});

noButton.addEventListener('mouseover', () => {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});