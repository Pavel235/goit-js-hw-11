import{S as u,i as l}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const p=document.querySelector(".form"),d=document.querySelector(".input-text");document.querySelector(".search-button");const i=document.querySelector(".gallery"),m=document.querySelector(".loading-container"),c={key:"41688461-d2a05e0fbe969f7f46dd1fb4f",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function f(o){fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(({hits:r})=>{if(r.length>0){const n=r.reduce((t,e)=>t+`
                <li class='gallery-list'>
                    <a href='${e.largeImageURL}'>
                     <img class='img-element' src='${e.webformatURL}' alt='${e.tags}'/>
                     <div class='gallery-text-wrapper'>
                     <p>Likes: <span class='img-text'>${e.likes}</span></p>
                     <p>Views: <span class='img-text'>${e.views}</span></p>
                     <p>Comments: <span class='img-text'>${e.comments}</span></p>
                     <p>Downloads: <span class='img-text'>${e.downloads}</span></p>
                     </div>
                    </a>
                </li>`,"");i.insertAdjacentHTML("afterbegin",n),new u(".gallery a",{captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom",close:!0,enableKeyboard:!0,docClose:!0}).refresh()}else l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{l.error({title:"Error",message:r.message,position:"topRight"})}).finally(()=>{m.classList.remove("is-open")})}p.addEventListener("submit",o=>{o.preventDefault(),i.innerHTML="",i.innerHTML===""&&m.classList.add("is-open"),c.q=d.value;const r=new URLSearchParams(c);f(r)});
//# sourceMappingURL=commonHelpers.js.map
