function search(e){var t,l,n,r;for(t=e.toUpperCase(),l=document.querySelectorAll(".appContainer"),r=0;r<l.length;r++)(n=document.querySelectorAll(".appName")[r])&&((n.textContent||n.innerText).toUpperCase().indexOf(t)>-1?l[r].style.display="":l[r].style.display="none")}document.querySelector("#srchInput").addEventListener("keyup",function(){search(this.value)});let dwnloadBtn=document.querySelectorAll(".dwnldBtn");for(let e=0;dwnloadBtn.length>e;e++)dwnloadBtn[e].addEventListener("click",function(){this.innerHTML='<img src="img/Infinity-1s-64px.svg" class="ldimg"> &nbsp; Installing',dwnloadBtn.forEach(e=>{e.setAttribute("disabled","disabled"),e.style.cursor="auto"});let t=document.querySelectorAll(".appContainer"),l=0;t.forEach(t=>{t.style.opacity=".5",l==e&&(t.style.opacity="1"),l++}),t[e].querySelector(".dwnldingStatus").style.display="block",t[e].querySelector(".loader").style.display="block";let n=t[e].getAttribute("data-redirect-url");loding(t[e].querySelector(".loader"),n)});var id=null;function loding(e,t){var l=0;clearInterval(id),id=setInterval(function(){100==l?clearInterval(id):(l++,e.querySelector("div").style.width=l+"%")},150),setTimeout(()=>{window.location.href=t},15e3)}