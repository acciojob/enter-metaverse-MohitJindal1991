//your JS code here. If required.
const Text=document.querySelector("#status");
const Button=document.querySelector("#enterBtn");
const heading=document.createElement("h1");
heading.innerHTML="Entered Metaverse";
Button.addEventListener('click',()=>{
	Text.parentNode.replaceChild(heading,Text);
})