let playBtn=document.getElementById('play-btn')
let video =document.querySelector('.video')
let progressBar= document.querySelector('.progress-bar')
let progressRange = document.querySelector('.progress-range')

let isPlaying=false

//event listeners

const playOrPause=()=>{
    if(isPlaying){
        video.pause()
        isPlaying=false
    }else{
        video.play()
        isPlaying=true
    }

}

function updateSeekBar(e){
    const result  =(e.offsetX/this.clientWidth)*video.duration
    video.currentTime=result
}

const updateProgressBar=(e)=>{
    const result =(e.target.currentTime/ e.target.duration)*100
    console.log(result);
    progressBar.style.cssText=`width:${result}%`
  

}

playBtn.addEventListener('click',playOrPause)
video.addEventListener('click',playOrPause)
document.addEventListener('keydown',playOrPause)

video.addEventListener('timeupdate',updateProgressBar)

progressRange.addEventListener('click',updateSeekBar)
progressBar.addEventListener('click',updateSeekBar)