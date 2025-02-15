import React, { useState } from 'react';
import WandaCalculator from './components/wandaF1.js';
import FormulaTwoCalculator from './components/FormulaTwoCalculator.js';
import FormulaThreeCalculator from './components/FormulaThereCalculator.js';
import FormulaFourCalculator from './components/FormulaFourCalculator.js';
import './App.css';

function App() {
  const [selectedFormula, setSelectedFormula] = useState('F1');

  const formulas = {
    F1: [
      { name: 'Cannola', percentage: 35 },
      { name: 'Maize', percentage: 5 },
      { name: 'Rapseed', percentage: 5 },
      { name: 'Wheat', percentage: 40 },
      { name: 'Chokar', percentage: 10 },
      { name: 'Sheera', percentage: 5 }
    ],
    F2: [
      { name: 'Cannola', percentage: 35 },
      { name: 'Rapseed', percentage: 5 },
      { name: 'Wheat', percentage: 45 },
      { name: 'Chokar', percentage: 10 },
      { name: 'Sheera', percentage: 5 }
    ],
    F3: [
      { name: 'Maize', percentage: 40 },
      { name: 'Soyabeen', percentage: 12 },
      { name: 'Cannola', percentage: 20 },
      { name: 'Rapseed', percentage: 5 },
      { name: 'Chokar', percentage: 13 },
      { name: 'Rice Polish', percentage: 5 },
      { name: 'Sheera', percentage: 5 }
    ]
  };

  return (
    <div className="App">
      <div className="formula-selector">
        <label className="formula-label">Select Formula: </label>
        <select 
          value={selectedFormula} 
          onChange={(e) => setSelectedFormula(e.target.value)}
          className="styled-select"
        >
          <option value="F1">Formula 1 (F1)</option>
          <option value="F2">Formula 2 (F2)</option>
          <option value="F3">Formula 3 (F3)</option>
          <option value="F4">Formula 4 (F4)</option>
        </select>
      </div>

      {selectedFormula === 'F1' && <WandaCalculator />}
      {selectedFormula === 'F2' && <FormulaTwoCalculator />}
      {selectedFormula === 'F3' && <FormulaThreeCalculator />}
      {selectedFormula === 'F4' && <FormulaFourCalculator />}

      <div className="ingredient-list stylish-ingredients">
        <h3 className="ingredients-title">Ingredients for {selectedFormula}</h3>
        <ul className="ingredient-list-container">
          {formulas[selectedFormula]?.map((ing, index) => (
            <li key={index} className="ingredient-item-stylish">
              <span className="ingredient-name-stylish">{ing.name}</span>
              <span className="ingredient-percentage-stylish">{ing.percentage}%</span>
            </li>
          )) || <p>No ingredients defined</p>}
        </ul>
      </div>
    </div>
  );
}

export default App;
