// app.js mejorado: animaciones, badges, confetti y render de fichas con más campos
let catalog = [];
let currentLevel = 0;
let score = 0;
const levels = [
  {id:'tecnicas', title:'Técnicas Didácticas'},
  {id:'exposicion', title:'Medios de Comunicación y Exposición'},
  {id:'cocreacion', title:'Medios de Co-creación y Organización'},
  {id:'evaluacion', title:'Medios de Evaluación y Gestión'}
];

document.addEventListener('DOMContentLoaded', ()=>{
  bindNav();
  fetch('assets/data/catalogo.json').then(r=>r.json()).then(data=>{
    catalog = data;
    renderLevel();
    gsap.from('.card', {stagger:0.03, y:8, opacity:0, duration:0.6});
  }).catch(err=>{
    console.warn('No se pudo cargar catalogo.json', err);
    catalog = [];
    renderLevel();
  });
  setupAudio();
  document.getElementById('start-btn').addEventListener('click', ()=>{
    goToSection('desarrollo'); currentLevel = 0; renderLevel();
  });
  document.getElementById('next-level').addEventListener('click', ()=>{ nextLevel(); });
  document.getElementById('prev-level').addEventListener('click', ()=>{ prevLevel(); });
  document.getElementById('download-result').addEventListener('click', downloadResult);
  document.getElementById('restart').addEventListener('click', ()=>{ currentLevel=0; score=0; goToSection('inicio'); renderLevel(); });
});

function bindNav(){
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{ document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); goToSection(btn.dataset.section);});
  });
}
function goToSection(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderLevel(){
  const titleEl = document.getElementById('level-title');
  const catalogueEl = document.getElementById('catalogue');
  const quizEl = document.getElementById('quiz');
  const progressBar = document.getElementById('progress-bar');
  const lvl = levels[currentLevel];
  titleEl.textContent = `Nivel ${currentLevel+1} — ${lvl.title}`;
  progressBar.style.width = `${((currentLevel)/(levels.length))*100}%`;
  catalogueEl.innerHTML = '';
  const items = catalog.filter(i=>i.category===lvl.id);
  if(items.length===0){
    catalogueEl.innerHTML = '<div class="card item">No hay elementos en esta categoría.</div>';
  } else {
    items.forEach(it=>{
      const card = document.createElement('div'); card.className='card item';
      const levelBadge = document.createElement('div'); levelBadge.className='badge small'; levelBadge.textContent = it.level || 'Básico';
      card.appendChild(levelBadge);
      let html = `<h4>${it.name}</h4>`;
      html += `<div class="item-meta"><strong>¿Qué es?</strong> ${it.description}</div>`;
      if(it.purpose) html += `<div class="item-meta"><strong>Propósito:</strong> ${it.purpose}</div>`;
      if(it.application) html += `<div class="item-meta"><strong>Aplicación:</strong> ${it.application}</div>`;
      if(it.advantages) html += `<div class="item-meta"><strong>Ventajas:</strong> ${it.advantages}</div>`;
      if(it.example) html += `<div class="item-meta"><strong>Ejemplo:</strong> ${it.example}</div>`;
      if(it.link) html += `<div class="item-meta"><a href="${it.link}" target="_blank">Recurso / enlace</a></div>`;
      card.innerHTML += html;
      catalogueEl.appendChild(card);
    });
  }
  // quiz
  quizEl.innerHTML = '';
  const q = pickQuestionForLevel(lvl.id);
  if(q){
    const qblock = document.createElement('div'); qblock.className='question card';
    qblock.innerHTML = `<div><strong>Mini-Quiz:</strong> ${q.question}</div>`;
    const answers = document.createElement('div'); answers.className='answers';
    q.options.forEach((opt,i)=>{
      const b = document.createElement('button'); b.className='answer-btn'; b.textContent = opt; b.addEventListener('click', ()=>{ handleAnswer(q,i,b); });
      answers.appendChild(b);
    });
    qblock.appendChild(answers);
    quizEl.appendChild(qblock);
  } else {
    quizEl.innerHTML = '<div class="card">Sin quiz para este nivel.</div>';
  }
  document.getElementById('prev-level').disabled = currentLevel===0;
  document.getElementById('next-level').disabled = false; // permitimos avanzar tras quiz
}

function pickQuestionForLevel(levelId){
  const item = catalog.find(i=>i.category===levelId && i.question);
  return item ? {question:item.question, options:item.options, answerIndex:item.answerIndex} : null;
}

function handleAnswer(q, selectedIndex, btn){
  if(!q) return;
  // disable answers
  const parent = btn.parentElement; Array.from(parent.children).forEach(b=>b.disabled=true);
  if(selectedIndex===q.answerIndex){ score += 10; btn.style.background='#d4f7d8'; playSfx('success'); confetti(); showToast('Correcto! +10 puntos'); }
  else{ btn.style.background='#ffd6d6'; playSfx('fail'); showToast('Incorrecto. Revisa la ficha.'); }
  // small animation
  gsap.from('.question', {y:-8, opacity:0, duration:0.45});
}

function nextLevel(){ if(currentLevel < levels.length-1){ currentLevel++; renderLevel(); } else { goToSection('cierre'); renderFinalQuiz(); }}
function prevLevel(){ if(currentLevel>0){ currentLevel--; renderLevel(); }}

function renderFinalQuiz(){
  const container = document.getElementById('final-quiz'); container.innerHTML='';
  const questions = catalog.filter(i=>i.finalQuestion).slice(0,5);
  if(questions.length===0){ container.innerHTML='<div class="card">No se han definido preguntas finales.</div>'; document.getElementById('download-result').disabled = false; return; }
  questions.forEach((q,idx)=>{
    const block = document.createElement('div'); block.className='card';
    block.innerHTML = `<div><strong>Pregunta ${idx+1}:</strong> ${q.finalQuestion}</div>`;
    const answers = document.createElement('div'); answers.className='answers';
    q.finalOptions.forEach((opt,i)=>{
      const b = document.createElement('button'); b.className='answer-btn'; b.textContent = opt; b.addEventListener('click', ()=>{
        if(b.dataset.answered) return; b.dataset.answered=true;
        if(i===q.finalAnswerIndex){ score+=20; b.style.background='#d4f7d8'; playSfx('success'); confetti(40); }
        else { b.style.background='#ffd6d6'; playSfx('fail'); }
        Array.from(answers.children).forEach(btn=>btn.disabled=true);
        document.getElementById('download-result').disabled=false;
      });
      answers.appendChild(b);
    });
    block.appendChild(answers);
    container.appendChild(block);
  });
}

function downloadResult(){
  const payload = {team:['Angulo Muñoz, LLony','Espinoza Pérez, Tania','Iturbe Quiroz, Rosa Elizabeth','Machoa Olortegui, Mari Elizabeth','Prado Lozano Nancy Lionel'], score, max:200, date:new Date().toISOString()};
  const blob = new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='resultado_catalogo.json'; a.click(); URL.revokeObjectURL(url);
}

// Audio & SFX (Howler)
let bg;
function setupAudio(){ try{ bg = new Howl({src:['assets/audio/background-loop.mp3'], loop:true, volume:0.25, onloaderror:()=>{console.warn('No audio placeholder encontrado.');}}); const toggle = document.getElementById('audio-toggle'); toggle.addEventListener('change', ()=>{ if(toggle.checked){ bg.play(); } else { bg.pause(); } }); if(toggle.checked) bg.play(); }catch(e){ console.warn('Howler no disponible', e); } }
function playSfx(kind){ try{ if(kind==='success') new Howl({src:['https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg'], volume:0.6}).play(); if(kind==='fail') new Howl({src:['https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg'], volume:0.6}).play(); }catch(e){} }

// small toast
function showToast(text){ const t = document.createElement('div'); t.className='card'; t.style.position='fixed'; t.style.right='20px'; t.style.bottom='20px'; t.style.zIndex='9999'; t.innerHTML = text; document.body.appendChild(t); gsap.from(t,{y:20, opacity:0, duration:0.4}); setTimeout(()=>{ gsap.to(t,{y:20, opacity:0, duration:0.4, onComplete:()=>t.remove()}); },2200); }

// confetti (simple canvas confetti via CDN-free snippet)
function confetti(pieces=20){ try{ if(window.confetti){ window.confetti({ particleCount: pieces, spread: 60, origin: { y: 0.6 } }); } else { /* load cdn and fire */ const s = document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'; s.onload = ()=>{ window.confetti({ particleCount: pieces, spread: 60, origin: { y: 0.6 } }); }; document.body.appendChild(s); } }catch(e){} }
