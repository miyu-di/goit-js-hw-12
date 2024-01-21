import{S as g,a as y,i as v}from"./assets/vendor-bad0427b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p=document.querySelector(".form"),h=document.querySelector(".inputsrc"),u=document.querySelector(".loader"),c=document.querySelector(".gallery"),i=document.querySelector(".loadbtn"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});let d=1,L=40,n,f;i.addEventListener("click",w);p.addEventListener("submit",async a=>{a.preventDefault(),c.innerHTML="",d=1,f=h.value,m()});async function w(){d+=1,await m()}async function m(){n={params:{key:"41766309-9b727aff341ca6e5a641aa2fb",q:f,orientation:"horizontal",per_page:L,page:d,image_type:"photo",safesearch:!0,order:"likes"}};try{u.classList.remove("hide");const a=await y.get("https://pixabay.com/api/",n),t=a.data;console.log(n.params.page),setTimeout(()=>{if(u.classList.add("hide"),a.data.totalHits>0){const r=t.hits.reduce((o,e)=>o+`<li>
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image">
          </a>
          <div class="info">
            <div class="field">
              <span class="label">Likes</span>
              <span class="value">${e.likes}</span>
            </div>
            <div class="field">
              <span class="label">Views</span>
              <span class="value">${e.views}</span>
            </div>
            <div class="field">
              <span class="label">Comments</span>
              <span class="value">${e.comments}</span>
            </div>
            <div class="field">
              <span class="label">Downloads</span>
              <span class="value">${e.downloads}</span>
            </div>
          </div>
          </li>`,"");c.insertAdjacentHTML("beforeend",r),b.refresh()}else v.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});S()},2e3)}catch(a){console.log(a)}finally{p.reset()}}function S(){c.innerHTML.trim()===""?i.classList.add("hide"):i.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
