import{S as L,i as m,a as b}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=d(e);fetch(e.href,s)}})();const g=document.querySelector(".form"),w=document.querySelector(".inputsrc"),u=document.querySelector(".loader"),c=document.querySelector(".gallery"),a=document.querySelector(".loadbtn"),S=new L(".gallery a",{captionsData:"alt",captionDelay:250});let l=1,y=40,p,h,i,f;a.addEventListener("click",q);g.addEventListener("submit",async t=>{t.preventDefault(),c.innerHTML="",l=1,h=w.value,a.classList.add("hide"),await v()});async function q(){l+=1;const t=Math.ceil(i.data.totalHits/y);if(l>t){a.classList.add("hide"),m.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}await v(),a.classList.remove("hide")}async function v(){p={params:{key:"41766309-9b727aff341ca6e5a641aa2fb",q:h,orientation:"horizontal",per_page:y,page:l,image_type:"photo",safesearch:!0,order:"likes"}};try{u.classList.remove("hide"),i=await b.get("https://pixabay.com/api/",p);const t=i.data;if(u.classList.add("hide"),i.data.totalHits>0){const o=t.hits.reduce((r,e)=>r+`<li>
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
          </li>`,"");c.insertAdjacentHTML("beforeend",o),f=document.querySelector(".gallery-image").getBoundingClientRect().height,window.scrollBy({top:2*f,behavior:"smooth"}),S.refresh()}else m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});$()}catch(t){console.log(t)}finally{g.reset()}}function $(){c.innerHTML.trim()===""?a.classList.add("hide"):a.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
