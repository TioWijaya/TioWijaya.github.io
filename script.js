const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('#nav a')];
window.addEventListener('scroll',()=>{let current='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-220)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))});

const themeBtn=document.getElementById('themeBtn');
themeBtn?.addEventListener('click',()=>{document.body.classList.toggle('light');themeBtn.textContent=document.body.classList.contains('light')?'☾':'☼'});

const modal=document.getElementById('projectModal');
const modalTitle=document.getElementById('modalTitle');
const modalDesc=document.getElementById('modalDesc');
const modalTech=document.getElementById('modalTech');
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};
document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('click',()=>{modalTitle.textContent=card.dataset.title;modalDesc.textContent=card.dataset.desc;modalTech.textContent=card.dataset.tech;modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
document.getElementById('modalClose')?.addEventListener('click',closeModal);
modal?.querySelector('.modal-backdrop')?.addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.getElementById('modalContact')?.addEventListener('click',closeModal);

const form=document.getElementById('contactForm');
form?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent('Kontak Portfolio — '+data.get('name'));const body=encodeURIComponent('Nama: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\nPesan:\n'+data.get('message'));window.location.href=`mailto:tiowijaya001@gmail.com?subject=${subject}&body=${body}`});
