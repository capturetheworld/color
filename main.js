let cnvs = document.getElementById('color-generation');
let pick = document.getElementById("picker");
let ctx = cnvs.getContext("2d");
setCanvas(1920,1080);

// createRectangle();

function setCanvas(width, height){
    changeSelection(width);
    console.log(width);
    cnvs.width = width;
    cnvs.height = height;
    console.log(cnvs.width);
    createRectangle();
    updateDownload();
}

function changeSelection(width){
    // let toUpdate = document.getElementById(width);
    if(width === 1920){
        document.getElementById(1920).style.backgroundColor = 'rgba(255,255,255,.2)';
        document.getElementById(3840).style.backgroundColor = 'transparent';
        
    }
    else {
        document.getElementById(1920).style.backgroundColor = 'transparent';
        document.getElementById(3840).style.backgroundColor = 'rgba(255,255,255,.2)';
    }
    
}

function createRectangle(){
    // ctx.beginPath();
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    ctx.fillStyle = pick.value;
    ctx.fillRect(0,0,cnvs.width,cnvs.height);
    ctx.stroke();

}

function updateDownload(){
    let download_button = document.getElementById("dloadbutton");
    const img = cnvs.toDataURL('image/png');
    download_button.href = img;
}


function changecolor() {
    updateDownload();
    
//     ctx.fillStyle = pick.value; 
//     // console.log("color is now");
//     // console.log(pick.value);

}


pick.addEventListener('input', function(event) {
   
        // console.log("WOWW")
        createRectangle();
        updateDownload();
    
});