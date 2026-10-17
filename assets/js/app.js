// app.js: lógica del prototipo (carga de catálogo, niveles y quizzes)
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
  }).catch(err=>{
    console.warn('No se pudo cargar catalogo.json', err);
    catalog = [];
    renderLevel();
  });
  setupAudio();
  document.getElementById('start-btn').addEventListener('click', ()=>{
    goToSection('desarrollo');
    currentLevel = 0; renderLevel();
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
  // progress
  progressBar.style.width = `${((currentLevel)/(levels.length))*100}%`;
  // render items
  catalogueEl.innerHTML = '';
  const items = catalog.filter(i=>i.category===lvl.id);
  if(items.length===0){
    catalogueEl.innerHTML = '<div class="card item">No hay elementos en esta categoría.</div>';
  } else {
    items.forEach(it=>{
      const card = document.createElement('div'); card.className='card item';
      card.innerHTML = `<h4>${it.name}</h4><p>${it.description}</p><p><strong>Ventajas:</strong> ${it.advantages}</p><p><strong>Ejemplo:</strong> ${it.example}</p><p><a href="${it.link}" target="_blank">Recurso / enlace</a></p>`;
      catalogueEl.appendChild(card);
    });
  }
  // render quiz for the level (single question)
  quizEl.innerHTML = '';
  const q = pickQuestionForLevel(lvl.id);
  if(q){
    const qblock = document.createElement('div'); qblock.className='question card';
    qblock.innerHTML = `<div><strong>Mini-Quiz:</strong> ${q.question}</div>`;
    const answers = document.createElement('div'); answers.className='answers';
    q.options.forEach((opt,i)=>{
      const b = document.createElement('button'); b.className='answer-btn'; b.textContent = opt; b.addEventListener('click', ()=>{ handleAnswer(q,i); });
      answers.appendChild(b);
    });
    qblock.appendChild(answers);
    quizEl.appendChild(qblock);
  } else {
    quizEl.innerHTML = '<div class="card">Sin quiz para este nivel.</div>';
  }
  // prev/next buttons
  document.getElementById('prev-level').disabled = currentLevel===0;
  document.getElementById('next-level').disabled = currentLevel>=levels.length-1;
}

function pickQuestionForLevel(levelId){
  // Busca en el catálogo una pregunta asociada
  const item = catalog.find(i=>i.category===levelId && i.question);
  return item ? {question:item.question, options:item.options, answerIndex:item.answerIndex} : null;
}

function handleAnswer(q, selectedIndex){
  const toast = document.createElement('div'); toast.className='card';
  if(selectedIndex===q.answerIndex){ score += 10; toast.innerHTML = '<strong>Correcto!</strong> +10 puntos'; playSfx('success'); }
  else { toast.innerHTML = '<strong>Incorrecto.</strong> Revisa la ficha y vuelve a intentar.'; playSfx('fail'); }
  const quizEl = document.getElementById('quiz'); quizEl.prepend(toast);
  // small animation
  gsap.from(toast, {y:-10, opacity:0, duration:0.6});
  // after answering, enable next
  document.getElementById('next-level').disabled = false;
}

function nextLevel(){ if(currentLevel < levels.length-1){ currentLevel++; renderLevel(); } else { // ir a cierre
  goToSection('cierre'); renderFinalQuiz(); }}
function prevLevel(){ if(currentLevel>0){ currentLevel--; renderLevel(); }}

// Final quiz
function renderFinalQuiz(){
  const container = document.getElementById('final-quiz'); container.innerHTML='';
  // simple 3-question quiz built from catalog
  const questions = catalog.filter(i=>i.finalQuestion).slice(0,3);
  if(questions.length===0){ container.innerHTML='<div class="card">No se han definido preguntas finales.</div>'; document.getElementById('download-result').disabled = false; return; }
  questions.forEach((q,idx)=>{
    const block = document.createElement('div'); block.className='card';
    block.innerHTML = `<div><strong>Pregunta ${idx+1}:</strong> ${q.finalQuestion}</div>`;
    const answers = document.createElement('div'); answers.className='answers';
    q.finalOptions.forEach((opt,i)=>{
      const b = document.createElement('button'); b.className='answer-btn'; b.textContent = opt; b.addEventListener('click', ()=>{
        if(i===q.finalAnswerIndex){ score+=20; b.style.background='#d4f7d8'; playSfx('success'); } else { b.style.background='#ffd6d6'; playSfx('fail'); }
        // disable siblings
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
  const payload = {team:['Angulo Muñoz, LLony','Espinoza Pérez, Tania','Iturbe Quiroz, Rosa Elizabeth','Machoa Olortegui, Mari Elizabeth','Prado Lozano Nancy Lionel'], score, max:100, date:new Date().toISOString()};
  const blob = new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='resultado_catalogo.json'; a.click(); URL.revokeObjectURL(url);
}

// Audio & SFX (Howler)
let bg;
function setupAudio(){
  try{
    bg = new Howl({src:['assets/audio/background-loop.mp3'], loop:true, volume:0.25, onloaderror:()=>{console.warn('No audio placeholder encontrado.');}});
    const toggle = document.getElementById('audio-toggle');
    toggle.addEventListener('change', ()=>{ if(toggle.checked){ bg.play(); } else { bg.pause(); } });
    if(toggle.checked) bg.play();
  }catch(e){ console.warn('Howler no disponible', e); }
}
function playSfx(kind){
  try{
    if(kind==='success') new Howl({src:['https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg'], volume:0.6}).play();
    if(kind==='fail') new Howl({src:['https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg'], volume:0.6}).play();
  }catch(e){}
}
