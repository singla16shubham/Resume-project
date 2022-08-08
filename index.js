var btns= document.querySelectorAll('.nav-menu a');
var currPos=0;
var scrollInterval;
for(var i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click',function(event)
    {
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        // console.log(targetSectionId);
        var targetSection=document.getElementById(targetSectionId);
        
         scrollInterval=setInterval(scrollWindow,25,targetSection);
    })
}
function scrollWindow(targetSection){
                    
                
    var targetPos=targetSection.offsetTop;
    // alert(targetPos);
    if(currPos>=targetPos)
    {
        clearInterval(scrollInterval);
        currPos=0;
        return;
    }
    currPos+=50;
    window.scrollBy(0,50);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Steps for the Auto fill scroll bar
// Handle Scrolll Event on Window
// Check that skill section container is visible or not
// Ensure initial width of skill bar is zero
//  start animation on each skill bar fill it from 0 to max
// Store skill level HTML with help of data attribute

// One more thing when skill section is not visible to us 
// then we should make animation done to false again so that when we come again to see it should refill
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var progressBars=document.querySelectorAll('.skill-progress>div');
var skillContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars()
{ for(let bar of progressBars)
    {
        bar.style.width=0+'%';
    }

}
function fillBars()
{
    //  If we used var instead of let then only last skill bar will be filled but not the other
    // If we do not want to use let we can define function outside then we have to handle interval function properly
    for(let bar of progressBars)
    { 
         let targetWidth=bar.getAttribute('data-bar-width');
    let currWidth=0;
        let interval=setInterval(function()
        {
            if(currWidth>targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width=currWidth+'%';
        },5)
    }
}
initialiseBars();
function checkScroll()
{
    // check whether skill container is visible
    var coordinates=skillContainer.getBoundingClientRect();
    
    if(!animationDone && coordinates.top<= window.innerHeight)
    {  animationDone=true;
        console.log("visible");
        fillBars();
    }
    else if(coordinates.top> window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}
*/
//////////////////////////////////////////////////////////////////////////////////

/*
This is more advanced version of auto fill bar.
In this bars will fill individually insetad of just filling at a time.
Only bars which is visible first will be filled.
In upper code all Bars filled automatically when skill container was visible even though Some skills were not
*/

//////////////////////////////////////////////////////////////////////////////////

var progressBars=document.querySelectorAll('.skill-progress>div');
var skillContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars(bar)
{   bar.setAttribute("data-visited", false);
        bar.style.width=0+'%';
    

}
for(let bar of progressBars)
    {
initialiseBars(bar);}

function fillBars(bar)
{
    //  If we used var instead of let then only last skill bar will be filled but not the other
    // If we do not want to use let we can define function outside then we have to handle interval function properly
    
         let targetWidth=bar.getAttribute('data-bar-width');
    let currWidth=0;
        let interval=setInterval(function()
        {
            if(currWidth>=targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width=currWidth+'%';
        },5)
    
}

function checkScroll()
{
    // check whether skill container is visible
    // initialiseBars(bar);
    for(let bar of progressBars)
    { 
       
    var barCoordinates=bar.getBoundingClientRect();
    
    if(bar.getAttribute("data-visited")=="false" && barCoordinates.top<= (window.innerHeight - barCoordinates.height))
     { 
    bar.setAttribute("data-visited", true);
        
        fillBars(bar);
    }
    else if (barCoordinates.top > window.innerHeight) {
        bar.setAttribute("data-visited", false);
        initialiseBars(bar);
    }
}
}

