//your JS code here. If required.
const statusParagraph=document.getElementById("status");
const enterBtn=document.getElementById("enterBtn");

enterBtn.addEventListener('click',()=>{
    statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
})