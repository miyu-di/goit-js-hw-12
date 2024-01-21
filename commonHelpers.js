import{S as b,i as m,a as L}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const g=document.querySelector(".form"),w=document.querySelector(".inputsrc"),u=document.querySelector(".loader"),c=document.querySelector(".gallery"),n=document.querySelector(".loadbtn"),S=new b(".gallery a",{captionsData:"alt",captionDelay:250});let i=1,y=40,p,h,r,f;n.addEventListener("click",q);g.addEventListener("submit",async s=>{s.preventDefault(),c.innerHTML="",i=1,h=w.value,v()});async function q(){i+=1;const s=Math.ceil(r.data.totalHits/y);if(i>s){m.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}await v()}async function v(){p={params:{key:"41766309-9b727aff341ca6e5a641aa2fb",q:h,orientation:"horizontal",per_page:y,page:i,image_type:"photo",safesearch:!0,order:"likes"}};try{u.classList.remove("hide"),r=await L.get("https://pixabay.com/api/",p);const s=r.data;setTimeout(()=>{if(u.classList.add("hide"),r.data.totalHits>0){const a=s.hits.reduce((o,e)=>o+`<li>
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
          </li>`,"");c.insertAdjacentHTML("beforeend",a),f=document.querySelector(".gallery-image").getBoundingClientRect().height,window.scrollBy({top:2*f,behavior:"smooth"}),S.refresh()}else m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});$()},2e3)}catch(s){console.log(s)}finally{g.reset()}}function $(){c.innerHTML.trim()===""?n.classList.add("hide"):n.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
