
var heading1= document.getElementById('heading');
var para1=document.getElementById('para');

// definition of function 


function hiddenPara(display){
    if(para1.style.display == "none"){
        para1.style.display = 'flex';
    }
    else{

        para1.style.display=display;
    }
}

