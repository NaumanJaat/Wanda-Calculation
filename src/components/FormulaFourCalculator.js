"use client"

import { useState } from "react"
import "./WandaCalculator.css"

const FormulaFourCalculator = () => {
  const [totalMass, setTotalMass] = useState("")
  const [ingredients, setIngredients] = useState([{ name: "", percentage: "" }])
  const [result, setResult] = useState([])
  const [formulaName, setFormulaName] = useState("")

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients]
    updatedIngredients[index][field] = value
    setIngredients(updatedIngredients)
  }

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", percentage: "" }])
  }

  const removeIngredient = (index) => {
    if (ingredients.length > 1) {
      const updatedIngredients = ingredients.filter((_, i) => i !== index)
      setIngredients(updatedIngredients)
    }
  }

  const calculateIngredients = () => {
    if (!totalMass || isNaN(totalMass)) return
    const mass = Number.parseFloat(totalMass)
    const calculated = ingredients
      .filter((ing) => ing.name && ing.percentage)
      .map((ing) => ({
        name: ing.name,
        mass: ((Number.parseFloat(ing.percentage) / 100) * mass).toFixed(2),
        percentage: Number.parseFloat(ing.percentage),
      }))
    setResult(calculated)
  }

  const getTotalPercentage = () => {
    return ingredients
      .filter((ing) => ing.percentage)
      .reduce((sum, ing) => sum + Number.parseFloat(ing.percentage || 0), 0)
  }

  const saveFormula = () => {
    if (!formulaName) {
      alert("Please enter a formula name")
      return
    }
    alert(`Formula "${formulaName}" saved successfully!`)
  }

  const totalPercentage = getTotalPercentage()

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <div className="calculator-header">
          <h2 className="calculator-title">Create Custom Formula</h2>
          <p className="calculator-subtitle">Build your own feed formula</p>
        </div>

        {/* <div className="input-group">
          <label className="input-label">Formula Name</label>
          <input
            type="text"
            placeholder="Enter formula name..."
            value={formulaName}
            onChange={(e) => setFormulaName(e.target.value)}
            className="calculator-input"
          />
        </div> */}

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

        <div className="ingredients-section">
          <div className="ingredients-header">
            <label className="input-label">Ingredients</label>
            <div className="percentage-indicator">
              <span
                className={`percentage-badge ${
                  totalPercentage === 100 ? "valid" : totalPercentage > 100 ? "invalid" : "incomplete"
                }`}
              >
                Total: {totalPercentage.toFixed(1)}%
              </span>
            </div>
          </div>

          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-row">
              <input
                type="text"
                placeholder="Ingredient name"
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                className="ingredient-name-input"
              />
              <input
                type="number"
                placeholder="%"
                value={ingredient.percentage}
                onChange={(e) => handleIngredientChange(index, "percentage", e.target.value)}
                className="ingredient-percentage-input"
              />
              <button
                onClick={() => removeIngredient(index)}
                disabled={ingredients.length === 1}
                className="remove-ingredient-btn"
              >
                ✕
              </button>
            </div>
          ))}

          <button onClick={addIngredient} className="add-ingredient-btn">
            + Add Ingredient
          </button>
        </div>

        <div className="action-buttons">
          <button
            onClick={calculateIngredients}
            className="calculate-button"
            disabled={!totalMass || ingredients.some((ing) => !ing.name || !ing.percentage)}
          >
            Calculate
          </button>
          {/* <button onClick={saveFormula} disabled={!formulaName || totalPercentage !== 100} className="save-button">
            Save Formula
          </button> */}
        </div>

        {result.length > 0 && (
          <div className="results-section">
            <div className="results-header">
              <span className="results-icon">✓</span>
              <h3 className="results-title">Calculation Results</h3>
            </div>

            <ul className="results-list">
              {result.map((ing, index) => (
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

export default FormulaFourCalculator
