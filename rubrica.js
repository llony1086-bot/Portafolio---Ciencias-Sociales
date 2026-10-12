const criteria = [
  {
    title: 'Investigación y contenido',
    description: 'El trabajo demuestra análisis profundo, datos relevantes y comprensión clara del tema.',
    badge: 'Bases'
  },
  {
    title: 'Creatividad visual',
    description: 'Presentación estética, coherencia visual, uso adecuado de colores, tipografías e imágenes.',
    badge: 'Diseño'
  },
  {
    title: 'Organización y claridad',
    description: 'La estructura del portafolio es lógica, ordenada y fácil de seguir para la audiencia.',
    badge: 'Estructura'
  },
  {
    title: 'Uso de tecnología',
    description: 'Se aplican herramientas digitales de forma efectiva y con propósito pedagógico.',
    badge: 'TIC'
  },
  {
    title: 'Presentación y expresión',
    description: 'La información se comunica con seguridad, precisión y capacidad argumentativa.',
    badge: 'Comunicación'
  }
];

const state = {
  values: Array(criteria.length).fill(0)
};

const scoreRing = document.getElementById('scoreRing');
const scoreValue = document.getElementById('scoreValue');
const levelName = document.getElementById('levelName');
const levelDescription = document.getElementById('levelDescription');
const criteriaCount = document.getElementById('criteriaCount');
const progressValue = document.getElementById('progressValue');
const saveStatus = document.getElementById('saveStatus');
const criteriaContainer = document.getElementById('criteriaContainer');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');

function getLevel(percent) {
  if (percent >= 90) {
    return {
      title: 'Nivel excelente',
      description: 'El portafolio presenta un nivel profesional sobresaliente y muy bien consolidado.'
    };
  }

  if (percent >= 75) {
    return {
      title: 'Nivel destacado',
      description: 'Se observa un trabajo de alta calidad con excelente organización y presentación.'
    };
  }

  if (percent >= 60) {
    return {
      title: 'Nivel competente',
      description: 'El trabajo cumple con los objetivos principales; solo requiere algunos ajustes finales.'
    };
  }

  if (percent >= 40) {
    return {
      title: 'Nivel inicial',
      description: 'Se evidencia avance, pero aún faltan reforzar aspectos clave de contenido y diseño.'
    };
  }

  return {
    title: 'Sin evaluar',
    description: 'Completa la rúbrica para obtener una valoración profesional del trabajo.'
  };
}

function renderCriteria() {
  criteriaContainer.innerHTML = criteria
    .map((criterion, index) => {
      const ratingButtons = Array.from({ length: 5 }, (_, value) => {
        const score = value + 1;
        const isActive = state.values[index] === score;
        return `
          <button
            type="button"
            class="rating-btn ${isActive ? 'active' : ''}"
            data-index="${index}"
            data-value="${score}"
            aria-label="Puntuar ${criterion.title} con ${score} puntos"
            title="${score} puntos"
          >
            ${score}
          </button>
        `;
      }).join('');

      return `
        <article class="criteria-card">
          <div class="card-top">
            <div>
              <h3>${criterion.title}</h3>
              <p>${criterion.description}</p>
            </div>
            <span class="card-badge">${criterion.badge}</span>
          </div>
          <div class="rating-group">${ratingButtons}</div>
        </article>
      `;
    })
    .join('');
}

function updateSummary() {
  const total = state.values.reduce((acc, score) => acc + score, 0);
  const maxTotal = criteria.length * 5;
  const completed = state.values.filter((score) => score > 0).length;
  const percent = maxTotal ? Math.round((total / maxTotal) * 100) : 0;
  const level = getLevel(percent);

  scoreValue.textContent = `${total}/${maxTotal}`;
  criteriaCount.textContent = `${completed}/${criteria.length}`;
  progressValue.textContent = `${percent}%`;
  levelName.textContent = level.title;
  levelDescription.textContent = level.description;
  scoreRing.style.setProperty('--progress', `${percent}%`);
}

function saveProgress() {
  localStorage.setItem('rubrica-portafolio', JSON.stringify(state.values));
  saveStatus.textContent = 'Rúbrica guardada correctamente.';
}

function resetProgress() {
  state.values = Array(criteria.length).fill(0);
  renderCriteria();
  updateSummary();
  localStorage.removeItem('rubrica-portafolio');
  saveStatus.textContent = 'La rúbrica ha sido reiniciada.';
}

function restoreProgress() {
  const saved = JSON.parse(localStorage.getItem('rubrica-portafolio') || 'null');

  if (Array.isArray(saved) && saved.length === criteria.length) {
    state.values = saved.map((value) => Math.min(Math.max(value, 0), 5));
    saveStatus.textContent = 'Se restauró la evaluación guardada.';
  }
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('.rating-btn');

  if (!button) {
    return;
  }

  const index = Number(button.dataset.index);
  const value = Number(button.dataset.value);

  state.values[index] = value;
  renderCriteria();
  updateSummary();
});

saveBtn.addEventListener('click', saveProgress);
resetBtn.addEventListener('click', resetProgress);

restoreProgress();
renderCriteria();
updateSummary();
