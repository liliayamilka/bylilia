const S=window.SITE,P=S.projects,app=document.getElementById('app'),FLIP_MS=380;
document.documentElement.classList.add('js');
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,touch=matchMedia('(hover:none)').matches;
window.ph=e=>{const d=document.createElement('div');d.className='ph';d.textContent=S.img+(e.dataset.s||'');e.replaceWith(d)};
/* scroll suave propio: recalcula el destino en cada cuadro, así no se queda a medias aunque cargue contenido */
function smoothTo(get,ms=950){const y0=scrollY,t0=performance.now(),ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
 if(rm)return scrollTo({top:get(),behavior:'instant'});
 const step=now=>{const t=Math.min(1,(now-t0)/ms);scrollTo({top:y0+(get()-y0)*ease(t),behavior:'instant'});if(t<1)requestAnimationFrame(step)};requestAnimationFrame(step)}
const toTop=()=>smoothTo(()=>0),toMarcas=()=>smoothTo(()=>document.getElementById('marcas').getBoundingClientRect().top+scrollY);
const imgTag=s=>`<img src="${S.img+s}" data-s="${s}" alt="" loading="lazy" onerror="ph(this)">`;
function item(it){const r=it.r||1,m=it.v?`<video autoplay loop muted playsinline preload="metadata" src="${S.vid+it.v}"></video>`:imgTag(it.s);
 return `<div class="cell rv${it.raw?' raw':''}" data-r="${r}" style="aspect-ratio:${r}${it.c?';background:'+it.c:''}">${m}</div>`}
const blocks={
 flow:([,cols])=>`<div class="flow${cols.flat().some(i=>i.v)?' vid':''}">${cols.map(c=>`<div class="col">${c.map(item).join('')}</div>`).join('')}</div>`,
 concept:([,t])=>`<hr><div class="cp">${t.map(([h,p],i)=>`<div class="n">0${i+1}</div><h4>${h}</h4><p>${p}</p>`).join('')}</div>`,
 copy:([,q])=>`<section class="wide copy"><h3>Ejemplos de <i>Copy</i></h3><ul>${q.map(x=>`<li>${x}</li>`).join('')}</ul></section>`,
 palette:([,i])=>`<section class="wide pal"><h3>Paleta de <i>Color</i></h3><div class="cell raw" data-r="${i.r}" style="aspect-ratio:${i.r}">${imgTag(i.s)}</div></section>`};
/* cada columna pesa 1/Σ(alto relativo) → todas quedan a la misma altura y nada se recorta */
function layout(f){f.querySelectorAll(':scope>.col').forEach(c=>{const h=[...c.children].reduce((s,x)=>s+1/(+x.dataset.r||1),0);c.style.flex=`${1/h} 1 0`})}
function fit(el){const c=el.closest('.cell');if(!c)return;const w=el.naturalWidth||el.videoWidth,h=el.naturalHeight||el.videoHeight;if(!w||!h)return;
 c.dataset.r=w/h;c.style.aspectRatio=w/h;const f=c.closest('.flow');if(f)layout(f)}
const flat=p=>[p.cover,...p.blocks.flatMap(b=>b[0]==='flow'?b[1].flat().map(i=>i.s):b[0]==='palette'?[b[1].s]:[])].filter((v,i,a)=>v&&a.indexOf(v)===i);
const star=(k,c)=>`<img class="stp ${c}" src="${S.img}site/star-${k}.webp" alt="" aria-hidden="true">`,tex=(st,sp)=>`<img class="blur" style="${st}" data-sp="${sp}" src="${S.img}site/texture.webp" alt="" aria-hidden="true">`;
function home(){const cv=`<a class="ic" ${S.cv?`href="${S.cv}" target="_blank" rel="noopener"`:'href="#" data-nocv'} aria-label="Mi CV" title="CV">CV</a>`;
 return `<div class="view"><header class="hero" id="inicio"><div class="art"><img class="tx" style="left:-37.57%;top:-8.34%;width:79.94%" src="${S.img}site/texture.webp" alt="" aria-hidden="true"><img class="tx" style="left:65.65%;top:39.43%;width:40.54%" src="${S.img}site/texture.webp" alt="" aria-hidden="true"><img class="me"src="${S.img}site/yo.webp" alt="Lilia Castañeda sentada en una silla frente al logotipo Lilia">
 <img class="sx" style="left:15.55%;top:53.98%;width:11.23%" src="${S.img}site/star-a.webp" alt="" aria-hidden="true"><img class="sx" style="left:80.36%;top:64.4%;width:8.06%" src="${S.img}site/star-c.webp" alt="" aria-hidden="true"><img class="sx" style="left:46.95%;top:75.28%;width:7.2%" src="${S.img}site/star-b.webp" alt="" aria-hidden="true">
 <nav class="menu" aria-label="Servicios"><a href="#marcas" data-f="BRANDING">Branding</a><a href="#marcas" data-f="SOCIAL MEDIA">Social media</a><a href="#marcas" data-f="MULTIMEDIA">Multimedia</a></nav>
 <p class="legal">Todos los materiales visuales de este sitio son obras originales de Lilia©<br>Todos los derechos reservados. Prohibida su reproducción, almacenamiento o difusión<br>sin consentimiento previo por escrito.</p></div></header>
 <section id="marcas"><div class="in"><h2>Marcas<br><b>materializadas.</b></h2><div class="cards">${P.map(p=>`<a class="card" href="#/p/${p.slug}" data-t="${p.tags.join('|')}${JSON.stringify(p.blocks).includes('"v":')||JSON.stringify(p.blocks).includes("v:")?'|MULTIMEDIA':''}"><div class="cv">${imgTag(p.cover).replace('<img','<img class="base"')}<img class="fl" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAAAAACw="></div><div class="r1"><b>${p.name}</b><span>${p.tags.join(' • ')}</span></div><div class="r2"><span>${p.homeKicker||p.kicker}</span><span>✱</span></div></a>`).join('')}</div></div></section>
 <section class="quote">${tex('left:12vw;top:-4vw;width:min(70vw,44rem)','.06')}<p><span>Good design <i>✱</i> <b>is obvious.</b><br><b>Great design</b> <i>✱</i> is transparent.</span></p></section>
 <footer class="foot"><div><a class="ic" href="${S.behance}" target="_blank" rel="noopener" aria-label="Behance">Bē</a>${cv}</div><p class="mid">TODA <b><i>MARCA</i></b> EMPIEZA CON UNA <b><i>IDEA</i></b></p><button class="mono up" data-up>↑ Arriba</button></footer></div>`}
const icons=()=>`<span class="icons"><a class="ic" href="${S.behance}" target="_blank" rel="noopener" aria-label="Behance">Bē</a><a class="ic" ${S.cv?`href="${S.cv}" target="_blank" rel="noopener"`:'href="#" data-nocv'} aria-label="Mi CV" title="CV">CV</a></span>`;
function project(p,i){const n=P[(i+1)%P.length];
 return `<div class="view"><main class="pj"><div class="top"><a class="pill" href="#/">←INICIO</a>${icons()}</div><p class="k">${p.kicker}</p><h1>${p.name}</h1><span class="pill">${p.tags.join(' • ')}</span><p class="ds">${p.desc}</p>${p.blocks.map(b=>blocks[b[0]](b)).join('')}</main>
 <footer class="pf"><a href="#/p/${n.slug}">PRÓXIMO PROYECTO→</a><p class="mid">TODA <b><i>MARCA</i></b> EMPIEZA CON UNA <b><i>IDEA</i></b></p><button data-up>↑ ARRIBA</button></footer></div>`}
async function flipbook(card,p){const box=card.querySelector('.cv'),fl=box.querySelector('.fl');
 const list=(await Promise.all(flat(p).filter(s=>s!==p.cover).map(s=>new Promise(r=>{const i=new Image();i.onload=()=>r(s);i.onerror=()=>r(null);i.src=S.img+s})))).filter(Boolean);if(!list.length)return;
 let t,k=0;const go=()=>{clearInterval(t);fl.src=S.img+list[0];box.classList.add('on');t=setInterval(()=>{k=(k+1)%list.length;fl.src=S.img+list[k]},FLIP_MS)},stop=()=>{clearInterval(t);k=0;box.classList.remove('on')};
 if(!touch){card.addEventListener('mouseenter',go);card.addEventListener('mouseleave',stop);card.addEventListener('focus',go);card.addEventListener('blur',stop)}
 else if(!rm)new IntersectionObserver(([e])=>e.isIntersecting?go():stop(),{threshold:.7}).observe(card)}
function wire(){
 document.querySelectorAll('.flow').forEach(layout);
 document.querySelectorAll('[data-up]').forEach(b=>b.onclick=toTop);
 document.querySelectorAll('[data-nocv]').forEach(a=>a.onclick=e=>e.preventDefault());
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -6% 0px'});document.querySelectorAll('.rv').forEach(x=>io.observe(x));
 const vio=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?e.target.play().catch(()=>{}):e.target.pause()),{threshold:.2});document.querySelectorAll('video').forEach(v=>vio.observe(v));
 let f=null;const links=[...document.querySelectorAll('.menu a')],cards=[...document.querySelectorAll('.card')];
 links.forEach(a=>a.onclick=ev=>{ev.preventDefault();f=f===a.dataset.f?null:a.dataset.f;links.forEach(x=>x.classList.toggle('sel',x.dataset.f===f));cards.forEach(c=>c.classList.toggle('dim',!!f&&!c.dataset.t.split('|').includes(f)));toMarcas()});
 /* estrellas cromadas: giran y crecen un poco cuando el cursor se acerca */
 const stars=[...document.querySelectorAll('.sx')];
 if(!rm&&!touch&&stars.length){
  stars.forEach(s=>s.style.transition='rotate .7s cubic-bezier(.2,.8,.2,1),scale .7s cubic-bezier(.2,.8,.2,1)');
  addEventListener('mousemove',e=>stars.forEach((s,i)=>{const r=s.getBoundingClientRect(),near=Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2))<Math.max(r.width,r.height)*.9;
   s.style.rotate=near?(i%2?-25:25)+'deg':'0deg';s.style.scale=near?'1.15':'1'}),{passive:true})}
 const sp=[...document.querySelectorAll('[data-sp]')];if(!rm&&sp.length){const tick=()=>{const h=innerHeight/2;sp.forEach(el=>{const r=el.getBoundingClientRect();el.style.transform=`translate3d(0,${(r.top+r.height/2-h)*el.dataset.sp}px,0)`})};addEventListener('scroll',()=>requestAnimationFrame(tick),{passive:true});tick()}}
app.addEventListener('load',e=>{if(e.target.tagName==='IMG')fit(e.target)},true);
app.addEventListener('loadedmetadata',e=>fit(e.target),true);
function route(){const m=location.hash.match(/^#\/p\/(.+)$/),i=m?P.findIndex(p=>p.slug===m[1]):-1;
 app.innerHTML=i>=0?project(P[i],i):home();document.title=i>=0?`${P[i].name} · Lilia Castañeda`:'Lilia Castañeda · Diseño gráfico';scrollTo({top:0,behavior:'instant'});wire()}
addEventListener('hashchange',route);route();

