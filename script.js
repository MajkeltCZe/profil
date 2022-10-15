const button = document.getElementById('button');
let clicked = false;

button.addEventListener('click', function() {
    

if (clicked == true) {

    button.innerText = 'Dark mode';
 document.body.style.backgroundImage = "linear-gradient(to bottom right, rgb(214, 214, 214),#fffdfd)"; 
document.body.style.color = "black"; 
clicked = false;

}

else {
    button.innerText = 'Light mode';
 document.body.style.backgroundImage = "linear-gradient(to bottom right, rgb(19, 19, 19),#0a0a0a)";
document.body.style.color = "white"; 
clicked  = true;

}

});

