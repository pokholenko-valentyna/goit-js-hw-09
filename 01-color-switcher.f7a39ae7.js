const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;function d(t){const e=document.querySelector("body"),a=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;e.style.backgroundColor=a}t.disabled=!1,t.addEventListener("click",(()=>{a=setInterval(d,1e3),t.classList.add("button__start"),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.f7a39ae7.js.map
