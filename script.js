:root {
  --primary-color: #132b55;
  --secondary-color: #2962c8;
  --accent-color: #17a2b8;
  --success-color: #2bb673;
  --danger-color: #e45757;
  --bg-color: #edf4ff;
  --surface-color: #ffffff;
  --surface-alt: #f3f8ff;
  --text-color: #1f2d3d;
  --muted-text: #5d6d82;
  --border-color: #d9e6f7;
  --shadow-soft: 0 12px 30px rgba(19, 43, 85, 0.12);
  --radius-lg: 20px;
  --radius-md: 14px;
  --radius-sm: 10px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(180deg, #eaf3ff 0%, #eef7ff 100%);
  color: var(--text-color);
  line-height: 1.6;
}

button {
  border: none;
  font: inherit;
}

.app-header {
  background: linear-gradient(135deg, var(--primary-color), #1d4a8d 55%, #2f6cd1);
  color: white;
  padding: 1.1rem 1.5rem 1.6rem;
  box-shadow: 0 10px 25px rgba(19, 43, 85, 0.15);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 92px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  padding: 0.55rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand-block h1 {
  font-size: clamp(1.6rem, 2.5vw, 2.5rem);
  line-height: 1.1;
  margin-bottom: 0.2rem;
}

.brand-block p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.96rem;
}

.stats-bar {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.stat-item {
  min-width: 155px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  padding: 0.8rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.75);
}

.stat-value {
  font-weight: 800;
  font-size: 1.15rem;
  color: #ffdd8d;
}

.main-container {
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 0 1rem 2rem;
}

.sidebar,
.content-panel {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

.sidebar {
  padding: 1.4rem 1rem;
  height: fit-content;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
}

.sidebar-header h2 {
  font-size: 1.05rem;
  color: var(--primary-color);
}

.mini-tag {
  background: #ebf4ff;
  color: var(--primary-color);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.35rem 0.55rem;
}

.levels-menu {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.level-btn {
  width: 100%;
  background: var(--surface-alt);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 0.9rem 0.95rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.level-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  border-color: var(--secondary-color);
  background: #ecf4ff;
}

.level-btn.active {
  background: linear-gradient(135deg, #eaf2ff, #dfeeff);
  border-color: var(--secondary-color);
  font-weight: 700;
}

.level-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.content-panel {
  padding: 1.6rem;
}

.panel-section {
  min-height: 420px;
}

.section-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.section-kicker {
  display: inline-block;
  background: #edf5ff;
  color: var(--secondary-color);
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.level-progress {
  color: var(--muted-text);
  font-size: 0.88rem;
  font-weight: 700;
}

#level-title,
#question-text,
#completion-message {
  color: var(--primary-color);
  margin-bottom: 1rem;
  line-height: 1.2;
}

#level-title {
  font-size: clamp(1.5rem, 2vw, 2.1rem);
}

#question-text {
  font-size: clamp(1.3rem, 1.8vw, 1.8rem);
}

.theory-box {
  background: linear-gradient(135deg, #f7fbff, #edf5ff);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.3rem 1.25rem;
  margin-bottom: 1.5rem;
}

.theory-text {
  color: var(--text-color);
  font-size: 1.03rem;
  white-space: pre-line;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.35rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.02);
}

.btn-primary {
  background: linear-gradient(135deg, var(--secondary-color), #2a86d9);
  color: white;
  box-shadow: 0 10px 20px rgba(41, 98, 200, 0.2);
}

.btn-secondary {
  background: linear-gradient(135deg, var(--accent-color), #0ea7b6);
  color: white;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin: 1.3rem 0 0;
}

.option-btn {
  width: 100%;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  text-align: left;
  padding: 1rem 1rem;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}

.option-btn:hover:not(:disabled) {
  border-color: var(--secondary-color);
  transform: translateY(-1px);
}

.option-btn.correct {
  background: #dff7ea;
  border-color: var(--success-color);
  color: #0e6134;
  font-weight: 600;
}

.option-btn.incorrect {
  background: #fee9ea;
  border-color: var(--danger-color);
  color: #8b2d2d;
  font-weight: 600;
}

.option-btn:disabled {
  cursor: not-allowed;
}

.feedback-box {
  margin-top: 1.5rem;
  background: #f4f8ff;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1rem 1rem 1.15rem;
}

.feedback-box p {
  color: var(--text-color);
  margin-bottom: 1rem;
  font-weight: 500;
}

.completion-card {
  height: 100%;
  min-height: 320px;
  display: grid;
  place-items: center;
  text-align: center;
  background: linear-gradient(135deg, rgba(23, 162, 184, 0.06), rgba(41, 98, 200, 0.04));
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 2rem 1.5rem;
}

.completion-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.completion-card p {
  max-width: 430px;
  color: var(--muted-text);
  margin-bottom: 1.2rem;
}

.hidden {
  display: none !important;
}

@media (max-width: 820px) {
  .main-container {
    grid-template-columns: 1fr;
  }

  .sidebar {
    order: 2;
  }

  .content-panel {
    order: 1;
  }
}

@media (max-width: 540px) {
  .header-container {
    align-items: flex-start;
  }

  .brand-block {
    width: 100%;
  }

  .stats-bar {
    width: 100%;
  }

  .stat-item {
    flex: 1 1 100%;
  }

  .section-topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
