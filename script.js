const paralaksBox = document.querySelector('.paralaksBox');
const foto1 = document.querySelector('.foto1');
const foto2 = document.querySelector('.foto2');
const foto3 = document.querySelector('.foto3');

const layers1 = foto1.querySelectorAll('img');
const layers2 = foto2.querySelectorAll('img');
const layers3 = foto3.querySelectorAll('img');

window.addEventListener('scroll', () => {
    const boxHeight = paralaksBox.offsetHeight;
    const scrollTrue = window.scrollY;

    const progressScroll = scrollTrue / (boxHeight - window.innerHeight);

    if (progressScroll <= 0.33) {
        foto1.style.opacity = '1';
        foto2.style.opacity = '0';
        foto3.style.opacity = '0';

        layers1[0].style.transform = `translateY(${progressScroll * 100}px)`;
        layers1[1].style.transform = `translateY(${progressScroll * 250}px)`;
        layers1[2].style.transform = `translateY(${progressScroll * -150}px)`;

    } else if (progressScroll < 0.66) {
        foto1.style.opacity = '0';
        foto2.style.opacity = '1';
        foto3.style.opacity = '0';

        layers2[0].style.transform = `translateY(${progressScroll * 150}px)`;
        layers2[1].style.transform = `translateY(${progressScroll * 300}px)`;
        layers2[2].style.transform = `translateY(${progressScroll * -170}px)`;

    } else {
        foto1.style.opacity = '0';
        foto2.style.opacity = '0';
        foto3.style.opacity = '1';

        layers3[0].style.transform = `translateY(${progressScroll * 80}px)`;
        layers3[1].style.transform = `translateY(${progressScroll * 200}px)`;
        layers3[2].style.transform = `translateY(${progressScroll * -100}px)`;
    }
});