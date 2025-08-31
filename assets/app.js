(function(){
  const el = document.getElementById("type");
  if(!el) return;
  const lines = [
    "init ghost-net…",
    "mounting /projects /mods /cars /lab…",
    "status: all systems nominal ✓",
    "welcome to Haunted Dreams."
  ];
  let i=0,j=0;
  function tick(){
    if(i<lines.length){
      if(j<lines[i].length){ el.textContent += lines[i][j++]; }
      else { el.innerHTML += "<br>"; i++; j=0; }
    }
    setTimeout(tick, j===0 ? 350 : 24);
  }
  tick();
  const yr=document.getElementById("yr"); if(yr) yr.textContent=new Date().getFullYear();
})();
