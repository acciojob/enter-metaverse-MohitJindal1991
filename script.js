//your JS code here. If required.
const status=document.querySelector("#status");
const enterBtn=document.querySelector("#enterBtn");

enterBtn.addEventListener('click',()=>{
     const heading=document.createElement("h1");
     heading.textContent="Entered Metaverse";
	status.parentNode.replaceChild(heading,status);
})