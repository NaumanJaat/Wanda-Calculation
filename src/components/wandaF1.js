"use client"

import { useState } from "react"
import "./WandaCalculator.css"

const WandaCalculator = ({ selectedFormula, formulas, category }) => {
  const [totalMass, setTotalMass] = useState("")
  const [ingredients, setIngredients] = useState([])

  const ingredientPercentages = formulas[selectedFormula] || []

  const calculateIngredients = () => {
    if (!totalMass || isNaN(totalMass)) return
    const mass = Number.parseFloat(totalMass)
    const calculated = ingredientPercentages.map((ing) => ({
      ...ing,
      mass: ((ing.percentage / 100) * mass).toFixed(2),
    }))
    setIngredients(calculated)
  }

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <div className="calculator-header">
          <h2 className="calculator-title">Mass Calculator</h2>
          <p className="calculator-subtitle">
            {category} - Formula {selectedFormula}
          </p>
        </div>

        <div className="input-group">
          <label className="input-label">Total Mass Required (kg)</label>
          <input
            type="number"
            placeholder="Enter total mass in kg..."
            value={totalMass}
            onChange={(e) => setTotalMass(e.target.value)}
            className="calculator-input"
          />
        </div>

        <button onClick={calculateIngredients} className="calculate-button" disabled={!totalMass}>
          Calculate Ingredients
        </button>

        {ingredients.length > 0 && (
          <div className="results-section">
            <div className="results-header">
              <span className="results-icon">✓</span>
              <h3 className="results-title">Calculation Results</h3>
            </div>

            <ul className="results-list">
              {ingredients.map((ing, index) => (
                <li key={index} className="result-item">
                  <span className="ingredient-name">{ing.name}</span>
                  <span className="ingredient-mass">{ing.mass} kg</span>
                </li>
              ))}
            </ul>

            <div className="total-summary">
              <div className="total-label">Total Mass</div>
              <div className="total-value">{totalMass} kg</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WandaCalculator
