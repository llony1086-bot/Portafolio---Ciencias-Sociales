<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Instrumento de Evaluación - Enseñanza e-learning</title>
  <style>
    :root {
      --primary: #1f4e79;
      --secondary: #d9eaf7;
      --accent: #e67e22;
      --dark: #1f1f1f;
      --light: #f8f9fb;
      --success: #2e7d32;
      --warning: #f39c12;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #eef3f8;
      color: var(--dark);
    }

    .container {
      max-width: 980px;
      margin: 30px auto;
      background: white;
      padding: 30px;
      border-radius: 14px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }

    h1, h2 {
      color: var(--primary);
    }

    .header {
      background: var(--secondary);
      padding: 20px;
      border-left: 6px solid var(--primary);
      border-radius: 10px;
      margin-bottom: 25px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      font-size: 14px;
    }

    th, td {
      border: 1px solid #d0d7de;
      padding: 10px;
      text-align: left;
      vertical-align: top;
    }

    th {
      background: var(--primary);
      color: white;
    }

    .score {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 18px;
    }

    .score span {
      background: var(--secondary);
      padding: 8px 12px;
      border-radius: 8px;
      font-weight: bold;
    }

    .form-group {
      margin-top: 18px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }

    input, textarea, select {
      width: 100%;
      padding: 10px 12px;
      border-radius: 8px;
      border: 1px solid #b9c4cf;
      font-size: 14px;
    }

    button {
      background: var(--primary);
      border: none;
      padding: 12px 18px;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 18px;
      font-size: 15px;
    }

    .result {
      margin-top: 18px;
      background: #edf7ee;
      border: 1px solid #bdd9c1;
      color: #204d2d;
      padding: 12px;
      border-radius: 8px;
      display: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Instrumento de evaluación</h1>
      <p>Actividad de extensión: diseño del producto final del estudiante para la sesión “La enseñanza e-learning”</p>
    </div>

    <h2>Rúbrica de evaluación</h2>

    <table>
      <thead>
        <tr>
          <th>Criterio</th>
          <th>Excelente (4)</th>
          <th>Bueno (3)</th>
          <th>Básico (2)</th>
          <th>Bajo (1)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pertinencia del tema</td>
          <td>El tema es claro, relevante y aporta a la enseñanza e-learning.</td>
          <td>El tema es apropiado con pequeños ajustes.</td>
          <td>El tema es parcialmente pertinente.</td>
          <td>El tema es poco relevante.</td>
        </tr>
        <tr>
          <td>Diseño pedagógico</td>
          <td>Objetivos, actividades y evaluación bien definidos.</td>
          <td>Estructura clara con algunos ajustes.</td>
          <td>Faltan elementos pedagógicos.</td>
          <td>Estructura insuficiente.</td>
        </tr>
        <tr>
          <td>Uso de herramientas digitales</td>
          <td>Se utilizan herramientas digitales de forma creativa y efectiva.</td>
          <td>Se usan herramientas adecuadas.</td>
          <td>Uso limitado de la tecnología.</td>
          <td>No se evidencia uso de tecnología.</td>
        </tr>
        <tr>
          <td>Calidad del contenido</td>
          <td>Contenido sólido, actualizado y bien fundamentado.</td>
          <td>Contenido adecuado.</td>
          <td>Contenido con limitaciones.</td>
          <td>Contenido insuficiente.</td>
        </tr>
        <tr>
          <td>Originalidad e innovación</td>
          <td>El producto es innovador y original.</td>
          <td>Hay cierto nivel de creatividad.</td>
          <td>Poca innovación.</td>
          <td>Sin innovación evidente.</td>
        </tr>
        <tr>
          <td>Presentación</td>
          <td>Presentación muy clara, ordenada y atractiva.</td>
          <td>Presentación adecuada.</td>
          <td>Presentación básica.</td>
          <td>Presentación deficiente.</td>
        </tr>
      </tbody>
    </table>

    <div class="score">
      <span>Nota máxima: 24</span>
      <span>Escala: 1–4 por criterio</span>
    </div>

    <h2>Formulario breve para calificar</h2>

    <form id="evalForm">
      <div class="form-group">
        <label for="studentName">Nombre del estudiante</label>
        <input id="studentName" type="text" placeholder="Ingrese el nombre" />
      </div>

      <div class="form-group">
        <label for="productName">Nombre del producto</label>
        <input id="productName" type="text" placeholder="Ejemplo: Módulo de aprendizaje virtual" />
      </div>

      <div class="form-group">
        <label for="pertinencia">Pertinencia del tema (1–4)</label>
        <select id="pertinencia">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div class="form-group">
        <label for="pedagogico">Diseño pedagógico (1–4)</label>
        <select id="pedagogico">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div class="form-group">
        <label for="digital">Uso de herramientas digitales (1–4)</label>
        <select id="digital">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div class="form-group">
        <label for="contenido">Calidad del contenido (1–4)</label>
        <select id="contenido">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div class="form-group">
        <label for="innovacion">Originalidad e innovación (1–4)</label>
        <select id="innovacion">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div class="form-group">
        <label for="presentacion">Presentación (1–4)</label>
        <select id="presentacion">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <button type="button" id="calculateBtn">Calcular nota</button>
    </form>

    <div class="result" id="result">
      <strong>Resultado:</strong> <span id="resultText"></span>
    </div>
  </div>

  <script>
    document.getElementById('calculateBtn').addEventListener('click', function () {
      const values = [
        Number(document.getElementById('pertinencia').value),
        Number(document.getElementById('pedagogico').value),
        Number(document.getElementById('digital').value),
        Number(document.getElementById('contenido').value),
        Number(document.getElementById('innovacion').value),
        Number(document.getElementById('presentacion').value)
      ];

      const total = values.reduce((sum, value) => sum + value, 0);
      const result = document.getElementById('result');
      const resultText = document.getElementById('resultText');

      resultText.textContent = `La nota obtenida es ${total} / 24.`;
      result.style.display = 'block';
    });
  </script>
</body>
</html>
