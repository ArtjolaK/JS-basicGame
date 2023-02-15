const ball=document.getElementById('ball');

function jump(){
   ball.classList.add("jump");

   setTimeout(function(){
       ball.classList.remove("jump")
   },900);
}
document.addEventListener('keydown',function(event){
    jump();
});



