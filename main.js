const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i < 6; i++) {
    const pic = ('images/pic' + i +'.jpg');
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pic);
    thumbBar.appendChild(newImage);
    newImage.onclick = function() {
        displayedImage.src = pic;
    }
}
/* Wiring up the Darken/Lighten button */

btn.onclick = function(){
if(btnClass === 'dark'){
btn.setAttribute('class', 'light');
btn.textContent = "lighten";
overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
} else {
    (btnClass === 'light')
    btn.setAttribute('class', 'dark');
    btn.textContent = "darken";
    overlay.style.background = "rgba(0,0,0,0)";
}
}