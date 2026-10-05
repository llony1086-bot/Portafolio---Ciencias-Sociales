// Banco de Datos de Ciencias Sociales - I.E. N° 0759 "Francisco Bolognesi"
// Docente: Llony Angulo Muñoz - III Bimestre

const levelsData = [
  {
    id: 1,
    title: 'Tema 1: El Feudalismo',
    theory: 'El Feudalismo fue el sistema político, económico y social predominante en Europa Occidental durante la Edad Media. Se basó en relaciones de vasallaje entre señores feudales y vasallos. La tierra era la base del poder y la riqueza, y los campesinos siervos trabajaban el feudo a cambio de protección.',
    questions: [
      {
        q: '¿Cuál era la base de la economía y del poder en el sistema feudal?',
        options: ['El comercio marítimo global', 'La propiedad de la tierra (feudo)', 'La industria manufacturera urbana'],
        answer: 1,
        feedback: 'La riqueza y el poder en el feudalismo dependían de la posesión de tierras (feudos) trabajadas por siervos.'
      },
      {
        q: '¿Qué compromiso asumía el vasallo respecto al señor feudal mediante la investidura?',
        options: ['Fidelidad y apoyo militar', 'Entrega total de su libertad personal', 'Pago exclusivo en oro e impuestos'],
        answer: 0,
        feedback: 'El contrato vasallático implicaba fidelidad mutua y auxilio militar por parte del vasallo a cambio de protección.'
      },
      {
        q: '¿Cuál era la condición socioeconómica de la mayoría de campesinos en el feudo?',
        options: ['Caballeros independientes', 'Comerciantes libres', 'Siervos de la gleba adscritos a la tierra'],
        answer: 2,
        feedback: 'Los siervos de la gleba estaban ligados a la tierra y no podían abandonarla sin el permiso del señor feudal.'
      }
    ]
  },
  {
    id: 2,
    title: 'Tema 2: El Tahuantinsuyo',
    theory: 'Gran imperio andino prehispánico organizado en cuatro suyos (Chinchaysuyo, Antisuyo, Contisuyo y Collasuyo) con capital en el Cusco. Su economía se fundamentó en la reciprocidad y la redistribución, y su organización política se apoyó en el poder del inca.',
    questions: [
      {
        q: '¿Cuáles fueron los dos principios básicos de la economía incaica?',
        options: ['Libre comercio y la moneda de plata', 'Reciprocidad y redistribución', 'Impuestos en efectivo y propiedad privada'],
        answer: 1,
        feedback: 'La economía inca no usó moneda; se basó en la ayuda mutua (reciprocidad) y la administración estatal (redistribución).'
      },
      {
        q: '¿Cómo se llamaba el trabajo obligatorio en beneficio del Estado Inca?',
        options: ['Ayni', 'Mita', 'Minka'],
        answer: 1,
        feedback: 'La mita era el sistema de trabajo por turnos obligatorios dedicado a las obras del Estado o del Inca.'
      },
      {
        q: '¿Qué función principal cumplía la red vial del Qhapaq Ñan?',
        options: ['Conectar el imperio para la integración administrativa, militar y mensajería', 'Servir como límite defensivo costero', 'Ruta exclusiva de peregrinación religiosa'],
        answer: 0,
        feedback: 'El Qhapaq Ñan unió los cuatro suyos facilitando el transporte, el despliegue de tropas y el paso de los chasquis.'
      }
    ]
  },
  {
    id: 3,
    title: 'Tema 3: El Humanismo y Renacimiento',
    theory: 'Movimientos culturales de los siglos XIV al XVI que marcaron la transición hacia la Edad Moderna. El Humanismo colocó al ser humano en el centro del pensamiento (antropocentrismo), y el Renacimiento impulsó las artes, la ciencia y la cultura.',
    questions: [
      {
        q: '¿Qué cambio filosófico central introdujo el Humanismo?',
        options: ['Rechazo total a las artes', 'Pasó del teocentrismo al antropocentrismo', 'Fomento del aislamiento científico'],
        answer: 1,
        feedback: 'El Humanismo situó al hombre y sus capacidades racionales en el centro de la reflexión.'
      },
      {
        q: '¿Qué invento crucial aceleró la difusión masiva de las ideas humanistas?',
        options: ['La brújula', 'La imprenta de tipos móviles de Gutenberg', 'El telescopio'],
        answer: 1,
        feedback: 'La imprenta creada por Gutenberg permitió multiplicar los libros rápidamente y abaratar el acceso a la lectura.'
      },
      {
        q: '¿Cómo se denominó a los burgueses o nobles que financiaron a los artistas renacentistas?',
        options: ['Mecenas', 'Vasallos', 'Siervos'],
        answer: 0,
        feedback: 'Los mecenas, como la familia Médici, financiaron obras de arte e investigaciones científicas impulsando el Renacimiento.'
      }
    ]
  },
  {
    id: 4,
    title: 'Tema 4: La Geomorfología',
    theory: 'Rama de la geografía física que estudia las formas del relieve de la corteza terrestre (montañas, mesetas, valles, llanuras) y analiza cómo se originan y modifican mediante fuerzas internas y externas.',
    questions: [
      {
        q: '¿Cuál es el objeto de estudio principal de la Geomorfología?',
        options: ['La composición de la atmósfera', 'Las formas y evolución del relieve terrestre', 'Las corrientes oceánicas profundas'],
        answer: 1,
        feedback: 'La geomorfología describe, clasifica y explica las características y evolución del relieve terrestre.'
      },
      {
        q: '¿Qué tipo de relieve es característico de las zonas andinas elevadas y planas como el Collao?',
        options: ['Mesetas o altiplanos', 'Llanuras aluviales costeñas', 'Valles glaciares profundos'],
        answer: 0,
        feedback: 'Las mesetas o altiplanos son relieves planos situados a gran altitud, ideales para la ganadería de camélidos.'
      },
      {
        q: '¿Qué agentes exógenos participan activamente en el modelado del relieve costero?',
        options: ['Magmatismo e isostasia', 'El viento, olas del mar y corrientes fluviales', 'Movimientos sísmicos internos'],
        answer: 1,
        feedback: 'El viento y las olas desgastan y depositan sedimentos continuamente esculpiendo la línea costera.'
      }
    ]
  },
  {
    id: 5,
    title: 'Tema 5: La Geodinámica Interna',
    theory: 'Procesos geológicos impulsados por el calor interno del planeta que construyen nuevas formas del relieve mediante el diastrofismo (orogénesis y epirogénesis), el vulcanismo y el sismismo.',
    questions: [
      {
        q: '¿Qué proceso tectónico orogénico es responsable de la formación de los Andes?',
        options: ['Meteorización química', 'Subducción y choque de placas tectónicas', 'Sedimentación eólica'],
        answer: 1,
        feedback: 'La Cordillera de los Andes se originó por la subducción de la Placa de Nazca debajo de la Placa Sudamericana.'
      },
      {
        q: '¿Cómo se denomina la manifestación donde el magma asciende y sale a la superficie?',
        options: ['Vulcanismo extrusivo', 'Plutonismo intrusivo', 'Meteorización biológica'],
        answer: 0,
        feedback: 'El vulcanismo extrusivo ocurre cuando el magma logra salir al exterior en forma de lava y gases a través de cráteres.'
      },
      {
        q: '¿Qué es el hipocentro durante un movimiento sísmico?',
        options: ['El punto en la superficie sobre la falla', 'El lugar interno en la corteza donde se origina el sismo', 'El tsunami posterior'],
        answer: 1,
        feedback: 'El hipocentro o foco es el punto interior de la Tierra donde se libera la energía sísmica.'
      }
    ]
  },
  {
    id: 6,
    title: 'Tema 6: El TLC y Globalización',
    theory: 'La globalización es un proceso de integración mundial económica, tecnológica y cultural. Los Tratados de Libre Comercio (TLC) buscan eliminar aranceles y barreras comerciales para facilitar el intercambio entre países.',
    questions: [
      {
        q: '¿Cuál es el objetivo principal de la firma de un Tratado de Libre Comercio (TLC)?',
        options: ['Aumentar impuestos a importaciones', 'Eliminar barreras arancelarias y facilitar el comercio', 'Prohibir la inversión extranjera'],
        answer: 1,
        feedback: 'Los TLC reducen o eliminan impuestos de importación (aranceles) para fomentar el comercio entre países.'
      },
      {
        q: '¿Qué rasgo caracteriza fundamentalmente a la Globalización contemporánea?',
        options: ['El aislamiento comercial de los países', 'La interconexión e interdependencia económica y cultural', 'El fin de las tecnologías de información'],
        answer: 1,
        feedback: 'La globalización integra mercados y sociedades mediante el flujo de bienes, información y capitales.'
      },
      {
        q: '¿Qué organismo estatal peruano promueve las exportaciones e imagen del Perú en el mercado global?',
        options: ['PROMPERÚ', 'SUNAT', 'INDECOPI'],
        answer: 0,
        feedback: 'PROMPERÚ posiciona la oferta exportable y el turismo peruano en los mercados internacionales.'
      }
    ]
  },
  {
    id: 7,
    title: 'Tema 7: Factores del Desarrollo Industrial',
    theory: 'La transformación de materias primas en productos manufacturados depende de factores clave: disponibilidad de recursos naturales, capital financiero, fuentes de energía, infraestructura y tecnología.',
    questions: [
      {
        q: '¿Qué factor del desarrollo industrial es indispensable para mover maquinarias en las fábricas?',
        options: ['Fuentes de energía (electricidad, petróleo, gas)', 'Aislamiento geográfico', 'Altos aranceles de exportación'],
        answer: 0,
        feedback: 'Toda actividad industrial requiere un suministro energético constante para operar sus máquinas.'
      },
      {
        q: '¿Qué elemento permite adquirir tecnologías de punta e infraestructura productiva?',
        options: ['Capital financiero e inversión', 'Trabajo artesanal sin herramientas', 'Subsistencia agraria'],
        answer: 0,
        feedback: 'El capital permite comprar maquinaria pesada, financiar investigación y sostener líneas de producción.'
      },
      {
        q: '¿Por qué la infraestructura de transportes es decisiva para la industria?',
        options: ['Impide la movilización de insumos', 'Facilita la distribución de materias primas y productos a los mercados', 'Reduce el uso de energía'],
        answer: 1,
        feedback: 'Una red de carreteras, puertos y aeropuertos conecta las fábricas con las fuentes de insumos y consumidores.'
      }
    ]
  }
];

let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let maxUnlockedLevel = 0;

const levelsMenu = document.getElementById('levels-menu');
const levelTitle = document.getElementById('level-title');
const theoryContent = document.getElementById('theory-content');
const startQuizBtn = document.getElementById('start-quiz-btn');
const theorySection = document.getElementById('theory-section');
const quizSection = document.getElementById('quiz-section');
const completionSection = document.getElementById('completion-section');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const nextQuestionBtn = document.getElementById('next-question-btn');
const scoreDisplay = document.getElementById('score-display');
const levelDisplay = document.getElementById('level-display');
const quizProgress = document.getElementById('quiz-progress');
const completionMessage = document.getElementById('completion-message');
const continueBtn = document.getElementById('continue-btn');
const levelProgressText = document.getElementById('level-progress-text');

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  loadLevel(0);
  startQuizBtn.addEventListener('click', startQuiz);
  nextQuestionBtn.addEventListener('click', nextQuestion);
  continueBtn.addEventListener('click', handleContinue);
});

function renderSidebar() {
  levelsMenu.innerHTML = '';

  levelsData.forEach((lvl, index) => {
    const btn = document.createElement('button');
    btn.className = `level-btn ${index === currentLevelIndex ? 'active' : ''}`;
    btn.disabled = index > maxUnlockedLevel;
    btn.innerHTML = `
      <span>${lvl.title.split(':')[0]}</span>
      <span>${index <= maxUnlockedLevel ? '🔓' : '🔒'}</span>
    `;
    btn.addEventListener('click', () => loadLevel(index));
    levelsMenu.appendChild(btn);
  });
}

function loadLevel(index) {
  currentLevelIndex = index;
  renderSidebar();

  const level = levelsData[index];
  levelTitle.textContent = level.title;
  theoryContent.textContent = level.theory;
  levelDisplay.textContent = `${index + 1} / ${levelsData.length}`;
  levelProgressText.textContent = `Nivel ${index + 1}`;

  theorySection.classList.remove('hidden');
  quizSection.classList.add('hidden');
  completionSection.classList.add('hidden');
}

function startQuiz() {
  currentQuestionIndex = 0;
  theorySection.classList.add('hidden');
  quizSection.classList.remove('hidden');
  displayQuestion();
}

function displayQuestion() {
  feedbackContainer.classList.add('hidden');
  const qData = levelsData[currentLevelIndex].questions[currentQuestionIndex];

  quizProgress.textContent = `Pregunta ${currentQuestionIndex + 1} de ${levelsData[currentLevelIndex].questions.length}`;
  questionText.textContent = qData.q;
  optionsContainer.innerHTML = '';

  qData.options.forEach((option, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.addEventListener('click', () => selectAnswer(idx));
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const qData = levelsData[currentLevelIndex].questions[currentQuestionIndex];
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');

  optionButtons.forEach((btn) => {
    btn.disabled = true;
  });

  if (selectedIndex === qData.answer) {
    optionButtons[selectedIndex].classList.add('correct');
    score += 100;
    scoreDisplay.textContent = score;
    feedbackText.textContent = `¡Correcto! ${qData.feedback}`;
  } else {
    optionButtons[selectedIndex].classList.add('incorrect');
    optionButtons[qData.answer].classList.add('correct');
    feedbackText.textContent = `Incorrecto. ${qData.feedback}`;
  }

  feedbackContainer.classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex += 1;
  const currentQuestions = levelsData[currentLevelIndex].questions;

  if (currentQuestionIndex < currentQuestions.length) {
    displayQuestion();
  } else {
    finishLevel();
  }
}

function finishLevel() {
  quizSection.classList.add('hidden');
  completionSection.classList.remove('hidden');

  if (currentLevelIndex === maxUnlockedLevel && maxUnlockedLevel < levelsData.length - 1) {
    maxUnlockedLevel += 1;
  }

  completionMessage.textContent = `¡Felicidades! Has superado los desafíos del ${levelsData[currentLevelIndex].title}.`;
  renderSidebar();
}

function handleContinue() {
  renderSidebar();

  if (currentLevelIndex < levelsData.length - 1) {
    loadLevel(currentLevelIndex + 1);
  } else {
    loadLevel(currentLevelIndex);
    alert('¡Felicitaciones! Has completado con éxito los 7 temas del III Bimestre de Ciencias Sociales.');
  }
}
