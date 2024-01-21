import{S as b,i as f,a as L}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=u(e);fetch(e.href,s)}})();const g=document.querySelector(".form"),w=document.querySelector(".inputsrc"),p=document.querySelector(".loader"),d=document.querySelector(".gallery"),c=document.querySelector(".loadbtn"),S=new b(".gallery a",{captionsData:"alt",captionDelay:250});let l=1,y=40,n,h,r,m;c.addEventListener("click",q);g.addEventListener("submit",async t=>{t.preventDefault(),d.innerHTML="",l=1,h=w.value,v()});async function q(){l+=1;const t=Math.ceil(r.data.totalHits/y);if(l>t){f.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}await v()}async function v(){n={params:{key:"41766309-9b727aff341ca6e5a641aa2fb",q:h,orientation:"horizontal",per_page:y,page:l,image_type:"photo",safesearch:!0,order:"likes"}};try{p.classList.remove("hide"),r=await L.get("https://pixabay.com/api/",n);const t=r.data;console.log(n.params.page),setTimeout(()=>{if(p.classList.add("hide"),r.data.totalHits>0){const a=t.hits.reduce((o,e)=>o+`<li>
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
          </li>`,"");d.insertAdjacentHTML("beforeend",a),m=document.querySelector(".gallery-image").getBoundingClientRect().height,window.scrollBy({top:2*m,behavior:"smooth"}),S.refresh()}else f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});$()},2e3)}catch(t){console.log(t)}finally{g.reset()}}function $(){d.innerHTML.trim()===""?c.classList.add("hide"):c.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
