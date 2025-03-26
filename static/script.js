const starsContainer = document.querySelector('.stars-container');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    

    const xPosition = Math.random() * window.innerWidth;
    star.style.left = `${xPosition}px`;


    const animationDelay = Math.random() * 3; 
    star.style.animationDelay = `${animationDelay}s`;

    starsContainer.appendChild(star);
}


setInterval(createStar, 100);
