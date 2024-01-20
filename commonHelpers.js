import{S as p,a as f,i as m}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const d=document.querySelector(".form"),g=document.querySelector(".inputsrc"),u=document.querySelector(".loader"),n=document.querySelector(".gallery"),i=document.querySelector(".loadbtn"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});let v=1,h=40,l;i.addEventListener("click",b());async function b(){await L()}function L(){d.addEventListener("submit",async c=>{c.preventDefault(),l={params:{key:"41766309-9b727aff341ca6e5a641aa2fb",q:`${g.value}`,orientation:"horizontal",per_page:h,page:v,image_type:"photo",safesearch:!0,order:"likes"}};try{u.classList.remove("hide");const t=await f.get("https://pixabay.com/api/",l),r=t.data;console.log(l.params.page),setTimeout(()=>{if(u.classList.add("hide"),n.innerHTML="",t.data.totalHits>0){const e=r.hits.reduce((s,a)=>s+`<li>
          <a href="${a.largeImageURL}">
            <img src="${a.webformatURL}" alt="${a.tags}" class="gallery-image">
          </a>
          <div class="info">
            <div class="field">
              <span class="label">Likes</span>
              <span class="value">${a.likes}</span>
            </div>
            <div class="field">
              <span class="label">Views</span>
              <span class="value">${a.views}</span>
            </div>
            <div class="field">
              <span class="label">Comments</span>
              <span class="value">${a.comments}</span>
            </div>
            <div class="field">
              <span class="label">Downloads</span>
              <span class="value">${a.downloads}</span>
            </div>
          </div>
          </li>`,"");n.insertAdjacentHTML("beforeend",e),y.refresh()}else m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});w()},2e3)}catch(t){console.log(t)}finally{d.reset()}})}function w(){n.innerHTML.trim()===""?i.classList.add("hide"):i.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
