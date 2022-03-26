
var currPos=0;
var btn1= document.getElementById("exp-btn");
var btn2= document.getElementById("about-btn");
var btn3= document.getElementById("skill-btn");
var btn4= document.getElementById("education-btn");
var btn5= document.getElementById("portfolio-btn");
var btn6= document.getElementById("contact-btn");
btn1.addEventListener('click',function()
{
    var scrollInterval=setInterval(function(){
        var elem=document.getElementById("Exp");
    
        var targetPos=elem.offsetTop;
        // alert(targetPos);
        if(currPos>=targetPos)
        {
            clearInterval(scrollInterval);
            currPos=0;
            return;
        }
        currPos+=50;
        window.scrollBy(0,50);
    },50);

})
btn2.addEventListener('click',function()
{
    var scrollInterval=setInterval(function(){
        var elem=document.getElementById("about");
    
        var targetPos=elem.offsetTop;
        // alert(targetPos);
        if(currPos>=targetPos)
        {
            clearInterval(scrollInterval);
            currPos=0;
            return;
        }
        currPos+=50;
        window.scrollBy(0,50);
    },50);

})
btn3.addEventListener('click',function()
{
    var scrollInterval=setInterval(function(){
        var elem=document.getElementById("skills");
       
        var targetPos=elem.offsetTop;
        // alert(targetPos);
        if(currPos>=targetPos)
        {
            clearInterval(scrollInterval);
            currPos=0;
            return;
        }
        currPos+=50;
        window.scrollBy(0,50);
    },50);

})
btn4.addEventListener('click',function()
{
    var scrollInterval=setInterval(function(){
        var elem=document.getElementById("Education");
    
        var targetPos=elem.offsetTop;
        // alert(targetPos);
        if(currPos>=targetPos)
        {
            clearInterval(scrollInterval);
            currPos=0;
            return;
        }
        currPos+=50;
        window.scrollBy(0,50);
    },50);

})
btn5.addEventListener('click',function()
{
    var scrollInterval=setInterval(function(){
        var elem=document.getElementById("portfolio");
    
        var targetPos=elem.offsetTop;
        // alert(targetPos);
        if(currPos>=targetPos)
        {
            clearInterval(scrollInterval);
            currPos=0;
            return;
        }
        currPos+=50;
        window.scrollBy(0,50);
    },50);

})
btn6.addEventListener('click',function()
{
    var scrollInterval=setInterval(function(){
        var elem=document.getElementById("contact");
    
        var targetPos=elem.offsetTop;
        // alert(targetPos);
        if(currPos>=targetPos)
        {
            clearInterval(scrollInterval);
            currPos=0;
            return;
        }
        currPos+=50;
        window.scrollBy(0,50);
    },50);

})

