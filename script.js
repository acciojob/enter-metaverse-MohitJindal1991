//your JS code here. If required.
const status=document.getElementById("status");
const enterBtn=document.getElementById("enterBtn");

enterBtn.addEventListener('click',()=>{
     const heading=document.createElement("h1");
    statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
	status.parentNode.replaceChild(heading,status);
})