import{O as t,C as o}from"./bsConstants.js";const s=document.querySelector("#bs-whatsnew"),n=document.querySelector("#bs-whatsnew-notes");s.innerHTML=`
  <div id="newsContainer">
    <h1>PDF! 1/8</h1>
    Absolutely nothing changed.
    </br>
    </br>
    Enjoy!
    </br>
    </br>
  </div>
`;t.onReady(async()=>{n.innerHTML=`
    <a href="https://www.patreon.com/battlesystem" target="_blank">Patreon!</a>
    <a href="https://discord.gg/ANZKDmWzr6" target="_blank">Join the OBR Discord!</a>
    <div class="close"><img style="height:40px; width:40px;" src="/close-button.svg"</div>`;const e=document.querySelector(".close");e.onclick=async()=>{await t.modal.close(o.EXTENSIONWHATSNEW)}});
