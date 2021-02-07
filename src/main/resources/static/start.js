var hey = document.getElementsByTagName('img');

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

var sound_lights = new sound("switch-3.mp3");

//also gonna run just once to turn on light
var lightson = (function() {
    var executed = false;
    return function() {
    if (!executed) {
        document.body.style.backgroundColor = 'white';
        hey[0].src = "https://www.svgrepo.com/show/142359/double-door-closed.svg";
        hey[0].style.visibility = "visible";
        sound_lights.play();
        executed = true;
    }
};
})();
//gonna run this function once
var dooropen = (function() {
    var executed = false;
    return function() {
    if (!executed) {
        //lights up room and displays door
        hey[0].src = "https://pbs.twimg.com/media/EtjPJUmXIAI7A5g?format=png&name=240x240";
        
        //removes the light
        setTimeout(()=>{
            hey[1].style.display = "none"; 
        },300)
        //fades away
        setTimeout(()=>{
            document.getElementById("door").style.animationPlayState = "running";
        },700)
        //doesnt display door anymore
        setTimeout(()=>{
            document.getElementById("door").style.display = "none";
            document.getElementById("gametext").style.display = "block";
        },1600)
        //now the text will display
        setTimeout(()=>{
            document.getElementById("gametext").style.animationPlayState = "running";
        },2200)
        //it will fade in
        setTimeout(()=>{
            document.getElementById("gametext").style.opacity = "1";
        },3100)
        //it will fadeout
        setTimeout(()=>{
            document.getElementById("gametext").style.animation = "fadeaway 1s";
        },4100)
        //it will disappear
        setTimeout(()=>{
            document.getElementById("gametext").style.display = "none";
        },5000)
        //make static fade in 
        setTimeout(()=>{
            document.getElementById("static").style.display = "block";
            document.getElementById("static").style.animationPlayState = "running";
        },6000)
        //make static stay
        setTimeout(()=>{
            document.getElementById("static").style.display = "block";
            document.getElementById("static").style.opacity = "1";
           
        },6000)

        executed = true;
    }
};
})();

function lightup(){
document.getElementById('light').style.opacity = "1";
}

function lightdown(){
document.getElementById('light').style.opacity = ".7";
}