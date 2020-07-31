const buttonOne = document.querySelector('button[name="one"]');
const buttonTwo = document.querySelector('button[name="two"]');
const buttonStart = document.querySelector('button[name="start"]');
const header = document.querySelector('.content h1');
const header2 = document.querySelector('.two h1');
const section3 = document.querySelector('.three');

let spinMe = () => {
    header.classList.remove('spin-me');
    
    // Allows animation to repeat
    void header.offsetWidth;

    header.classList.add('spin-me');
}

let fallMe = () => {

    header.innerHTML = header.textContent.replace(/\S/g, '<span class="letter">$&</span>');
    let letters = document.querySelectorAll('.letter');
    letters.forEach( (letter, index) => {
        setTimeout( function() {
            letter.classList.add('fall-me');
        }, 50 * index);
        
        // letter.classList.add('fall-me');
    });
}

let rotateMe = () => {
    header2.classList.toggle('rotate-me');
    console.log("Help");
    if (buttonStart.textContent === "Start") {
        buttonStart.textContent = "Stop";
    } else if (buttonStart.textContent === "Stop"){
        buttonStart.textContent = "Start";
    }
    // Allows animation to repeat
    void header2.offsetWidth;
}

let clicky = (e) => {
    let effect = document.createElement('div');
    effect.classList.add('click-effect');
    effect.style.left = e.clientX+"px";
    effect.style.top = e.clientY+"px";
    section3.appendChild(effect);
    effect.addEventListener('animationend', () => {
        effect.parentElement.removeChild(effect);
    });
}

buttonOne.addEventListener('click', spinMe);
buttonTwo.addEventListener('click', fallMe);
buttonStart.addEventListener('click', rotateMe);
section3.addEventListener('click', clicky);