!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=null;function n(t){var e=document.querySelector("body"),a="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));e.style.backgroundColor=a}t.disabled=!1,t.addEventListener("click",(function(){a=setInterval(n,1e3),t.classList.add("button__start"),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.dbafaf9f.js.map