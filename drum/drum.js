var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     buttonInner=this.innerHTML;
     
    makeSound(buttonInner);  
    animation(buttonInner);
     
    })
}

document.addEventListener("keypress",function(event)
{console.log(this);
 makeSound(event.key);
 animation(event.key);
 
})




function makeSound(keyPress)
{
  switch(keyPress)
  {
   case "w":
       var audio1=new Audio("sounds/crash.mp3");
       audio1.play();
       break;
 case "a":
       var audio2=new Audio("sounds/kick-bass.mp3");
       audio2.play();
       break;

 case "s":
   var audio3=new Audio("sounds/snare.mp3");
   audio3.play();
   break;
case "d":
       var audio4=new Audio("sounds/tom-1.mp3");
       audio4.play();
case "j":
           var audio5=new Audio("sounds/tom-2.mp3");
           audio5.play();
case "k":
               var audio6=new Audio("sounds/tom-3.mp3");
               audio6.play();
       
   


  }
}

function animation(press)
{
 var ele=document.querySelector("."+press);
 ele.classList.add("pressed");
 setTimeout(function(){
  ele.classList.remove("pressed",100)
 },1000)
}