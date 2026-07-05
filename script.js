function toggleTheme(){
document.body.classList.toggle("dark");
}

let topBtn=document.getElementById("topBtn");

window.onscroll=function(){
if(document.body.scrollTop>200 ||
document.documentElement.scrollTop>200){
topBtn.style.display="block";
}
else{
topBtn.style.display="none";
}
};

function topFunction(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0;
}