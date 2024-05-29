//your JS code here. If required.
const size = document.getElementById("size");

function updateScreenSzie(e){
    size.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

window.addEventListener("resize",(e)=>{
    size.innerText = `Width: ${e.target.innerWidth} and Height: ${e.target.innerHeight}`;
});
updateScreenSzie();