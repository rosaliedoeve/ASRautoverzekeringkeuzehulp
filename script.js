// ========================================
// Data Structure - Insurance Comparison
// ========================================

const insuranceData = [
  {
    category: "Basisdekking",
    features: [
      {
        name: "Schade aan anderen of andermans auto",
        wa: true,
        waBeperkt: true,
        waAllrisk: true
      },
      {
        name: "Diefstal jouw auto",
        wa: false,
        waBeperkt: true,
        waAllrisk: true
      },
      {
        name: "Brand en natuurgeweld",
        wa: false,
        waBeperkt: true,
        waAllrisk: true
      },
      {
        name: "Ruitschade zonder eigen risico",
        wa: false,
        waBeperkt: true,
        waAllrisk: true
      },
      {
        name: "Schade aan jouw auto",
        wa: false,
        waBeperkt: false,
        waAllrisk: true
      },
      {
        name: "Schade door aanrijding",
        wa: false,
        waBeperkt: false,
        waAllrisk: true
      }
    ]
  },
  {
    category: "Aanvullende dekkingen",
    features: [
      {
        name: "Pechhulp",
        wa: "optional",
        waBeperkt: "optional",
        waAllrisk: "optional"
      },
      {
        name: "Schade inzittenden",
        wa: "optional",
        waBeperkt: "optional",
        waAllrisk: "optional"
      },
      {
        name: "Rechtsbijstand motorrijtuigen",
        wa: "optional",
        waBeperkt: "optional",
        waAllrisk: "optional"
      },
      {
        name: "Extra's boven €1.000",
        wa: false,
        waBeperkt: "optional",
        waAllrisk: "optional"
      }
    ]
  },
  {
    category: "Extra opties",
    features: [
      {
        name: "Eigen risico aanpassen",
        wa: false,
        waBeperkt: "optional",
        waAllrisk: "optional"
      },
      {
        name: "Verzeker de nieuwwaarde 2 of 3 jaar",
        wa: false,
        waBeperkt: "optional",
        waAllrisk: "optional"
      },
      {
        name: "Verzeker de aankoopwaarde",
        wa: false,
        waBeperkt: "optional",
        waAllrisk: "optional"
      }
    ]
  }
];

// ========================================
// Wizard Data Structure
// ========================================

const wizardSteps = [
  {
    id: 1,
    title: "Vertel ons over je auto",
    description: "Dit helpt ons de beste dekking voor jouw situatie te vinden.",
    questions: [
      {
        id: "carAge",
        label: "Hoe oud is je auto?",
        type: "radio",
        options: [
          {
            value: "new",
            title: "0 tot 3 jaar oud",
            description: "Nieuwe of bijna nieuwe auto met hoge waarde"
          },
          {
            value: "middle",
            title: "4 tot 10 jaar oud",
            description: "Auto met gemiddelde waarde"
          },
          {
            value: "old",
            title: "Ouder dan 10 jaar",
            description: "Oudere auto met lagere waarde"
          }
        ]
      },
      {
        id: "carValue",
        label: "Wat is de huidige waarde van je auto?",
        type: "radio",
        options: [
          {
            value: "high",
            title: "Meer dan €15.000",
            description: "Hoogwaardige auto die goed beschermd moet worden"
          },
          {
            value: "medium",
            title: "€5.000 - €15.000",
            description: "Gemiddelde waarde auto"
          },
          {
            value: "low",
            title: "Minder dan €5.000",
            description: "Lage waarde auto"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Je rijsituatie",
    description: "Laat ons meer weten over hoe je je auto gebruikt.",
    questions: [
      {
        id: "damageRisk",
        label: "Hoe groot schat je het risico in op schade aan je auto?",
        type: "radio",
        options: [
          {
            value: "high",
            title: "Hoog risico",
            description: "Ik parkeer vaak op straat, rijd in drukke steden, of heb weinig rijervaring"
          },
          {
            value: "medium",
            title: "Gemiddeld risico",
            description: "Normale omstandigheden, soms op straat parkeren"
          },
          {
            value: "low",
            title: "Laag risico",
            description: "Ik parkeer in garage, rijd rustig en heb veel ervaring"
          }
        ]
      },
      {
        id: "ownDamage",
        label: "Wil je eigen schade aan je auto verzekerd hebben?",
        type: "radio",
        options: [
          {
            value: "yes",
            title: "Ja, zeker",
            description: "Ik wil volledig beschermd zijn tegen schade aan mijn eigen auto"
          },
          {
            value: "limited",
            title: "Alleen tegen diefstal en brand",
            description: "Aanrijdingsschade wil ik zelf betalen"
          },
          {
            value: "no",
            title: "Nee, niet nodig",
            description: "Ik betaal eigen schade liever zelf"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Extra opties",
    description: "Kies aanvullende bescherming die bij jouw situatie past.",
    questions: [
      {
        id: "additionalCoverage",
        label: "Welke aanvullende dekkingen wil je?",
        type: "checkbox",
        options: [
          {
            value: "roadside",
            title: "Pechhulp",
            description: "Hulp bij pech, vanaf de eerste kilometer"
          },
          {
            value: "passengers",
            title: "Schade inzittenden",
            description: "Bescherming voor passagiers bij ongevallen"
          },
          {
            value: "legal",
            title: "Rechtsbijstand",
            description: "Juridische hulp bij verkeersgeschillen"
          },
          {
            value: "none",
            title: "Geen extra's",
            description: "Alleen de basisdekking is voldoende"
          }
        ]
      },
      {
        id: "deductible",
        label: "Wat wil je als eigen risico?",
        type: "radio",
        options: [
          {
            value: "0",
            title: "€0 eigen risico",
            description: "Niets zelf betalen bij schade (hogere premie)"
          },
          {
            value: "150",
            title: "€150 eigen risico",
            description: "Balans tussen premie en eigen bijdrage"
          },
          {
            value: "500",
            title: "€500 eigen risico",
            description: "Lagere premie, meer zelf betalen bij schade"
          }
        ]
      }
    ]
  }
];

// ========================================
// State Management
// ========================================

let currentStep = 1;
let wizardAnswers = {};

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initializeTabs();
  renderComparisonTable();
  initializeWizard();
});

// ========================================
// Tab Navigation
// ========================================

function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabName) {
  // Update buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });

  const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
    activeButton.setAttribute('aria-selected', 'true');
  }

  // Update panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  const activePanel = document.getElementById(`${tabName}-panel`);
  if (activePanel) {
    activePanel.classList.add('active');
  }
}

function switchToKeuzehulp() {
  switchTab('keuzehulp');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// Comparison Table - Desktop
// ========================================

function renderComparisonTable() {
  const tbody = document.getElementById('comparison-tbody');
  if (!tbody) return;

  let html = '';

  insuranceData.forEach(category => {
    // Category header
    html += `
      <tr class="category-header">
        <td colspan="4">${category.category}</td>
      </tr>
    `;

    // Features
    category.features.forEach(feature => {
      html += `
        <tr>
          <td class="feature-name">${feature.name}</td>
          <td class="coverage-cell" data-column="1">${getCoverageIcon(feature.wa)}</td>
          <td class="coverage-cell" data-column="2">${getCoverageIcon(feature.waBeperkt)}</td>
          <td class="coverage-cell" data-column="3">${getCoverageIcon(feature.waAllrisk)}</td>
        </tr>
      `;
    });
  });

  tbody.innerHTML = html;

  // Add click handlers for column highlighting
  addColumnClickHandlers();
}

function getCoverageIcon(coverage) {
  if (coverage === true) {
    return '<span class="coverage-indicator included" aria-label="Inbegrepen">✓</span>';
  } else if (coverage === "optional") {
    return '<span class="coverage-indicator optional" aria-label="Optioneel">+</span>';
  } else {
    return '<span class="coverage-indicator not-included" aria-label="Niet inbegrepen">✗</span>';
  }
}

let highlightedColumn = null;

function addColumnClickHandlers() {
  const table = document.querySelector('.comparison-table');
  if (!table) return;

  // Add click handlers to header columns
  const headers = table.querySelectorAll('thead th.insurance-column');
  headers.forEach((header, index) => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => toggleColumnHighlight(index + 1));
  });

  // Add click handlers to body cells
  const cells = table.querySelectorAll('tbody td[data-column]');
  cells.forEach(cell => {
    cell.style.cursor = 'pointer';
    cell.addEventListener('click', () => {
      const column = parseInt(cell.getAttribute('data-column'));
      toggleColumnHighlight(column);
    });
  });
}

function toggleColumnHighlight(columnIndex) {
  const table = document.querySelector('.comparison-table');
  if (!table) return;

  // If clicking the same column, remove highlight
  if (highlightedColumn === columnIndex) {
    removeColumnHighlight();
    highlightedColumn = null;
    return;
  }

  // Remove previous highlight
  removeColumnHighlight();

  // Add new highlight
  highlightedColumn = columnIndex;

  // Highlight header
  const headers = table.querySelectorAll('thead th');
  if (headers[columnIndex]) {
    headers[columnIndex].classList.add('highlighted');
  }

  // Highlight all cells in the column
  const cells = table.querySelectorAll(`tbody td[data-column="${columnIndex}"]`);
  cells.forEach(cell => {
    cell.classList.add('highlighted');
  });
}

function removeColumnHighlight() {
  const table = document.querySelector('.comparison-table');
  if (!table) return;

  // Remove highlight from all elements
  table.querySelectorAll('.highlighted').forEach(element => {
    element.classList.remove('highlighted');
  });
}

// ========================================
// Comparison Cards - Mobile
// ========================================

function renderComparisonCards() {
  const container = document.querySelector('.comparison-cards');
  if (!container) return;

  const insurances = [
    {
      name: "WA (verplicht)",
      icon: "🛡️",
      key: "wa"
    },
    {
      name: "WA + Casco Beperkt",
      icon: "🚗",
      key: "waBeperkt"
    },
    {
      name: "WA + Casco Allrisk",
      icon: "⭐",
      key: "waAllrisk"
    }
  ];

  let html = '';

  insurances.forEach(insurance => {
    html += `
      <div class="insurance-card">
        <div class="insurance-card-header">
          <span class="insurance-icon">${insurance.icon}</span>
          <h3>${insurance.name}</h3>
        </div>
        <div class="feature-list">
          ${renderCardFeatures(insurance.key)}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderCardFeatures(insuranceKey) {
  let html = '';

  insuranceData.forEach(category => {
    html += `<h4 class="feature-category">${category.category}</h4>`;

    category.features.forEach(feature => {
      const coverage = feature[insuranceKey];
      html += `
        <div class="feature-item">
          ${getCoverageIcon(coverage)}
          <span class="feature-text">${feature.name}</span>
        </div>
      `;
    });
  });

  return html;
}

// ========================================
// Wizard Initialization
// ========================================

function initializeWizard() {
  renderWizardStep(1);
  updateProgress();
}

function renderWizardStep(stepNumber) {
  const wizardContent = document.getElementById('wizard-content');
  if (!wizardContent) return;

  const step = wizardSteps.find(s => s.id === stepNumber);
  if (!step) return;

  let html = `
    <div class="wizard-step active">
      <h2>${step.title}</h2>
      <p>${step.description}</p>
  `;

  step.questions.forEach(question => {
    html += `
      <div class="question-group">
        <label class="question-label">${question.label}</label>
        <div class="${question.type === 'radio' ? 'radio-group' : 'checkbox-group'}">
    `;

    question.options.forEach((option, index) => {
      const inputType = question.type;
      const inputId = `${question.id}_${option.value}`;
      const isChecked = wizardAnswers[question.id] === option.value ||
                        (Array.isArray(wizardAnswers[question.id]) && wizardAnswers[question.id].includes(option.value));

      html += `
        <label class="${inputType}-option ${isChecked ? 'selected' : ''}" for="${inputId}">
          <input
            type="${inputType}"
            id="${inputId}"
            name="${question.id}"
            value="${option.value}"
            ${isChecked ? 'checked' : ''}
            onchange="handleAnswer('${question.id}', '${option.value}', '${inputType}')"
          >
          <div class="option-content">
            <div class="option-title">${option.title}</div>
            <div class="option-description">${option.description}</div>
          </div>
        </label>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `</div>`;

  wizardContent.innerHTML = html;
  currentStep = stepNumber;
  updateProgress();
  updateNavigationButtons();
}

// ========================================
// Wizard Navigation
// ========================================

function nextStep() {
  // Validate current step
  const currentStepData = wizardSteps.find(s => s.id === currentStep);
  if (currentStepData) {
    const allAnswered = currentStepData.questions.every(q => {
      return wizardAnswers[q.id] !== undefined;
    });

    if (!allAnswered) {
      alert('Beantwoord alle vragen voordat je verder gaat.');
      return;
    }
  }

  if (currentStep < wizardSteps.length) {
    renderWizardStep(currentStep + 1);
  } else {
    showResults();
  }
}

function previousStep() {
  if (currentStep > 1) {
    renderWizardStep(currentStep - 1);
  }
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (prevBtn) {
    prevBtn.style.display = currentStep > 1 ? 'block' : 'none';
  }

  if (nextBtn) {
    nextBtn.textContent = currentStep === wizardSteps.length ? 'Toon Advies →' : 'Volgende →';
  }
}

function updateProgress() {
  const totalSteps = wizardSteps.length + 1; // +1 for results
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const progressFill = document.getElementById('progress-fill');
  if (progressFill) {
    progressFill.style.width = `${progressPercentage}%`;
  }

  // Update step indicators
  document.querySelectorAll('.progress-step').forEach((step, index) => {
    const stepNumber = index + 1;
    step.classList.remove('active', 'completed');

    if (stepNumber === currentStep) {
      step.classList.add('active');
    } else if (stepNumber < currentStep) {
      step.classList.add('completed');
    }
  });
}

// ========================================
// Answer Handling
// ========================================

function handleAnswer(questionId, value, type) {
  if (type === 'checkbox') {
    if (!Array.isArray(wizardAnswers[questionId])) {
      wizardAnswers[questionId] = [];
    }

    // Handle "none" option
    if (value === 'none') {
      wizardAnswers[questionId] = ['none'];
      // Uncheck all other checkboxes
      document.querySelectorAll(`input[name="${questionId}"]`).forEach(input => {
        if (input.value !== 'none') {
          input.checked = false;
          input.parentElement.classList.remove('selected');
        } else {
          input.checked = true;
          input.parentElement.classList.add('selected');
        }
      });
    } else {
      // Remove "none" if other option is selected
      const noneIndex = wizardAnswers[questionId].indexOf('none');
      if (noneIndex > -1) {
        wizardAnswers[questionId].splice(noneIndex, 1);
        const noneInput = document.querySelector(`input[name="${questionId}"][value="none"]`);
        if (noneInput) {
          noneInput.checked = false;
          noneInput.parentElement.classList.remove('selected');
        }
      }

      const index = wizardAnswers[questionId].indexOf(value);
      if (index > -1) {
        wizardAnswers[questionId].splice(index, 1);
      } else {
        wizardAnswers[questionId].push(value);
      }
    }

    // Update visual state
    const checkbox = document.getElementById(`${questionId}_${value}`);
    if (checkbox) {
      const label = checkbox.parentElement;
      if (checkbox.checked) {
        label.classList.add('selected');
      } else {
        label.classList.remove('selected');
      }
    }
  } else {
    wizardAnswers[questionId] = value;

    // Update visual state for radio buttons
    document.querySelectorAll(`input[name="${questionId}"]`).forEach(input => {
      const label = input.parentElement;
      if (input.checked) {
        label.classList.add('selected');
      } else {
        label.classList.remove('selected');
      }
    });
  }
}

// ========================================
// Results Calculation
// ========================================

function calculateRecommendation() {
  const { carAge, carValue, damageRisk, ownDamage, additionalCoverage, deductible } = wizardAnswers;

  let recommendedInsurance = "WA (verplicht)";
  let reasoning = [];

  // Determine base insurance
  if (ownDamage === 'yes') {
    recommendedInsurance = "WA + Casco Allrisk";
    reasoning.push("Je wilt volledig beschermd zijn tegen schade aan je eigen auto");
  } else if (ownDamage === 'limited') {
    recommendedInsurance = "WA + Casco Beperkt";
    reasoning.push("Je wilt beschermd zijn tegen diefstal en brand");
  } else if ((carAge === 'new' || carValue === 'high') && ownDamage !== 'no') {
    recommendedInsurance = "WA + Casco Allrisk";
    reasoning.push("Je auto heeft een hoge waarde en verdient uitgebreide bescherming");
  } else if (carAge === 'middle' && carValue === 'medium' && damageRisk === 'high') {
    recommendedInsurance = "WA + Casco Beperkt";
    reasoning.push("Een beperkte casco dekking biedt goede bescherming tegen diefstal en brand");
  }

  // Additional coverage recommendations
  const additionalRecommendations = [];

  if (additionalCoverage && additionalCoverage.includes('roadside')) {
    additionalRecommendations.push({
      name: "Pechhulp",
      reason: "Hulp bij pech vanaf de eerste kilometer"
    });
  }

  if (additionalCoverage && additionalCoverage.includes('passengers')) {
    additionalRecommendations.push({
      name: "Schade inzittenden",
      reason: "Bescherming voor passagiers bij ongevallen"
    });
  }

  if (additionalCoverage && additionalCoverage.includes('legal')) {
    additionalRecommendations.push({
      name: "Rechtsbijstand",
      reason: "Juridische hulp bij verkeersgeschillen"
    });
  }

  // Deductible recommendation
  let deductibleAdvice = "";
  if (deductible === '0') {
    deductibleAdvice = "€0 eigen risico - Je betaalt niets bij schade";
  } else if (deductible === '150') {
    deductibleAdvice = "€150 eigen risico - Goede balans tussen premie en eigen bijdrage";
  } else if (deductible === '500') {
    deductibleAdvice = "€500 eigen risico - Lagere premie, meer zelf betalen bij schade";
  }

  return {
    insurance: recommendedInsurance,
    reasoning,
    additionalCoverage: additionalRecommendations,
    deductible: deductibleAdvice
  };
}

function showResults() {
  const recommendation = calculateRecommendation();
  const wizardContent = document.getElementById('wizard-content');

  currentStep = wizardSteps.length + 1;
  updateProgress();

  let additionalCoverageHTML = '';
  if (recommendation.additionalCoverage.length > 0) {
    additionalCoverageHTML = `
      <div class="results-insurance">
        <h3>Aanvullende dekkingen</h3>
        <ul class="results-list">
          ${recommendation.additionalCoverage.map(item => `
            <li>${item.name} - ${item.reason}</li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  let html = `
    <div class="wizard-step active">
      <div class="results-container">
        <div class="results-header">
          <span class="recommended-badge">✓ Jouw advies op maat</span>
          <h2>Wij adviseren: ${recommendation.insurance}</h2>
        </div>

        <div class="results-insurance">
          <h3>Waarom deze dekking?</h3>
          <ul class="results-list">
            ${recommendation.reasoning.map(reason => `<li>${reason}</li>`).join('')}
          </ul>
        </div>

        ${additionalCoverageHTML}

        ${recommendation.deductible ? `
          <div class="results-insurance">
            <h3>Eigen risico</h3>
            <p>${recommendation.deductible}</p>
          </div>
        ` : ''}

        <div class="results-actions">
          <button class="btn-primary" onclick="location.reload()">
            Nieuwe berekening
          </button>
          <button class="btn-secondary" onclick="switchTab('vergelijk')">
            Bekijk vergelijking
          </button>
        </div>
      </div>
    </div>
  `;

  wizardContent.innerHTML = html;

  // Update navigation
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.style.display = 'block';
  if (nextBtn) nextBtn.style.display = 'none';
}
