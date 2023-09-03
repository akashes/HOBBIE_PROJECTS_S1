let screen=document.getElementById('input')

function btnClick(value){
    screen.value+=value

}
function clearScreen(){
    screen.value=" "
}
function result(){
    try{
          let result=eval(screen.value)
    screen.value=result

    }
    catch{
        

        screen.value="Invalid Expression"
        screen.style.fontSize='2rem'

    }
  
}


function clearOne(){
    screen.value=screen.value.slice(0,-1)
}