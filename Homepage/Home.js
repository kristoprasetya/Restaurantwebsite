let toogleState = false;

let toogleNav = function (){
    let element = document.getElementById ('navbar-nav')
    if(toogleState == false){
        element.style.display= 'flex';
        toogleState = true;
    }else{
        element.style.display= 'none';
        toogleState = false;
    }
}

setInterval(()=>{
    let containerWidth = $("#slider-container").width()
    let left = $("#image-roll").css("left").split("px")[0]
    let imgCount = 7;

    if(left == containerWidth * -1 * (imgCount - 1)){
        $("#image-roll").animate({left : 0})
    }
    else{
        $("#image-roll").animate({left : left - containerWidth})
    }
},2000)