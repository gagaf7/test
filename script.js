// on récupère tous les élémenat nécessaires
const audio = document.querySelector("audio");
const track = document.querySelector("#track");
const elapsed = document.querySelector("#elapsed");
let trackTime = document.querySelector("#track-time");
const playButtom = document.querySelector("#play-buttom");
const pauseButtom = document.querySelector("#pause-buttom");
const stopButtom = document.querySelector("#stop-buttom");
const skipButtom = document.querySelector("#skip-buttom");
const skipButtom2 = document.querySelector("#skip-buttom2");
const volume = document.querySelector("#volume");
const volumeValue = document.querySelector("#volume-value");
const musique = document.querySelector("#musique");
const skipStartButtom = document.querySelector("#skip-start-buttom");
const skipStartButtom2 = document.querySelector("#skip-start-buttom2");
const Image = document.querySelector("#image");
const video = document.querySelector("#video");
const check = document.querySelector("#check");
const chooseBoutonRight = document.getElementById("check.buttom-right");
const chooseBoutonLeft = document.getElementById("check.buttom-left");

//on récupère la durer du mp3
console.log(audio);
let duration = audio.duration;
const musique1 ={
    source: "musique/Legends Never Die (ft. Against The Current)  Worlds 2017 - League of Legends.mp3",
    clips : "Clips_video/Legends Never Die (ft. Against The Current)  Worlds 2017 - League of Legends.mp4",
    temps : musique.duration,
};
const musique2 ={
    source: "musique/Overlord III - Voracity (Opening)  ENGLISH Ver  AmaLee.mp3",
    clips : "Clips_video/Overlord III - Voracity (Opening)  ENGLISH Ver  AmaLee.mp4",
    temps : musique.duration,
};
const musique3 ={
    source:"musique/Suzume no Tojimari OST - Main Theme Full[Suzume]by RADWIMPS ft. toaka.mp3"  ,
    clips:"Clips_video/Suzume by Radwimps - Music Video『Suzume no Tojimari』.mp4",
};
const musique4 ={
    source:"musique/Nyan Cat! [Official].mp3" ,
    clips:"Clips_video/Nyan Cat! [Official].mp4",
};
const musique5 ={
    source:"musique/Best Songs for Playing LOL #6 1H Gaming Music  Worlds League of Legends Music 2021.mp3"  ,
    clips:"Clips_video/Nyan Cat! [Official].mp4",
};

let i = 0
let situe = 0
if (i <= 0){
    i = 0
}
const playlist =[musique1,musique2, musique3, musique4,musique5]
console.log(playlist[1].temps);
console.log(playlist);
console.log(musique2);

const taille = playlist.length;
trackTime.textContent = buildDuration(duration);

video.style.display ="none";

chooseBoutonRight.addEventListener("click", function(){
    check.textContent = "vidéo";
    video.style.display = "initial";
    Image.style.display ="none";
    this.style.display = "none";
    chooseBoutonLeft.style.display = "initial";
});
chooseBoutonLeft.addEventListener("click", function(){
    check.textContent = "Image";
    video.style.display = "none";
    Image.style.display ="initial";
    this.style.display = "none";
    chooseBoutonRight.style.display = "initial";
});

console.log(playlist[i].source)



// on gére un bouton play
playButtom.addEventListener("click" , function(){
    audio.play();
    video.play();
    audio.volume = volume.value;
   pauseButtom.style.display = "initial";
   stopButtom.style.display = "initial";
   this.style.display = "none";
});
// on gère le bouton pause
pauseButtom.addEventListener("click", function(){
    audio.pause();
    video.pause();
    playButtom.style.display = "initial";
    stopButtom.style.display = "initial";
    this.style.display = "none";
});
//on gère le bouton stop
stopButtom.addEventListener("click", function(){
    audio.pause();
    audio.currentTime = 0;
    video.pause();
    video.currentTime = 0;
    playButtom.style.display = "initial";
    pauseButtom.style.display = "none";
    this.style.display = "none";
});

skipButtom.addEventListener("click", function(){
    audio.pause();
    audio.currentTime = 0;
    playButtom.style.display = "initial";
    pauseButtom.style.display = "none";
    stopButtom.style.display ="none";
    skipStartButtom.style.display ="initial";
    i = i + 1 ; 
    console.log(playlist[1].temps);
    console.log(i);
    console.log(playlist.length);
    if (i >= taille - 1){
        i = taille - 1;
        this.style.display = "none";
    };
    console.log(i);
    audio.src= playlist[i].source;
    video.src = playlist[i].clips;
});


skipStartButtom.addEventListener("click", function(){
    audio.pause();
    audio.currentTime = 0;
    playButtom.style.display = "initial";
    pauseButtom.style.display = "none";
    stopButtom.style.display ="none";
    skipButtom.style.display = "initial";
    i = i -1;
    if (i <= 0){
        i = 0;
        this.style.display="none";
    };
    audio.src= playlist[i].source;
    video.src = playlist[i].clips;
});

audio.addEventListener("timeupdate", function(){
    track.value = this.currentTime;
    elapsed.textContent = buildDuration(this.currentTime);
});

track.addEventListener("input", function(){
    elapsed.textContent = buildDuration(this.value);
    audio.currentTime = this.value;
    video.currentTime = this.value;
});


volume.addEventListener("input",function(){
    audio.volume=this.value;
    volumeValue.textContent = Math.round(this.value*100) + "%";
});

function buildDuration(duration){
    let heure = Math.floor(duration/3600)
    let minutes = Math.floor(duration % 60);    
    let reste = duration % 60;
    let secondes = Math.floor(reste);
    secondes = String(secondes).padStart(2, "0");
    return heure + ":" + minutes + ":" + secondes;
};
