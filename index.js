const button=document.querySelector('button')
const body =document.querySelector('body')
const color =['red','green','blue','purple','orange','yellowgreen','brown','pink']
body.style.backgroundColor='violet'


button.addEventListener('click',changeBackgroundColor)


function changeBackgroundColor(){
    const colorIndex=parseInt(Math.random()*color.length)
    // math.random is inbuild function of the javascript
    // math.random will not take the value in sequence 
    // it will take the random value.(Any color)

   body.style.backgroundColor=color[colorIndex];


}