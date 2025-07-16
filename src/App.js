"use client"

import { useState, useEffect } from "react"
import WandaCalculator from "./components/wandaF1.js"
import FormulaFourCalculator from "./components/FormulaFourCalculator.js"
import "./App.css"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedFormula, setSelectedFormula] = useState("")
  const [isCreateFormula, setIsCreateFormula] = useState(false)

  // Define formulas for each category
  const formulas = {
    "Dry Animals": {
      F1: [
        { name: "Canola", percentage: 35 },
        { name: "Maize", percentage: 5 },
        { name: "Rapseed", percentage: 5 },
        { name: "Wheat", percentage: 40 },
        { name: "Chokar", percentage: 10 },
        { name: "Sheera", percentage: 5 },
      ],
      F2: [
        { name: "Canola", percentage: 35 },
        { name: "Rapseed", percentage: 5 },
        { name: "Wheat", percentage: 45 },
        { name: "Chokar", percentage: 10 },
        { name: "Sheera", percentage: 5 },
      ],
      F3: [
        { name: "Soyabeen", percentage: 30 },
        { name: "Rice Polish", percentage: 15 },
        { name: "Wheat", percentage: 40 },
        { name: "Chokar", percentage: 10 },
        { name: "Sheera", percentage: 5 },
      ],
      F4: [
        { name: "Makai", percentage: 20 },
        { name: "Canola Meal", percentage: 25 },
        { name: "Binola Khal", percentage: 30 },
        { name: "Chokar", percentage: 15 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
        { name: "Urea (Controlled)", percentage: 5 },
      ],
      F5: [
        { name: "Makai", percentage: 25 },
        { name: "Canola Meal", percentage: 20 },
        { name: "Binola Khal", percentage: 25 },
        { name: "Chokar", percentage: 20 },
        { name: "Molasses", percentage: 5 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
      ],
      F6: [
        { name: "Makai", percentage: 30 },
        { name: "Canola Meal", percentage: 15 },
        { name: "Binola Khal", percentage: 20 },
        { name: "Chokar", percentage: 25 },
        { name: "Soybean Meal", percentage: 5 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
      ],
    },
    "Milking Animals": {
      F1: [
        { name: "Makai", percentage: 30 },
        { name: "Canola Meal", percentage: 30 },
        { name: "Binola Khal", percentage: 20 },
        { name: "Chokar", percentage: 10 },
        { name: "Soybean Meal", percentage: 5 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
      ],
      F2: [
        { name: "Makai", percentage: 35 },
        { name: "Canola Meal", percentage: 25 },
        { name: "Binola Khal", percentage: 15 },
        { name: "Chokar", percentage: 10 },
        { name: "Molasses", percentage: 10 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
      ],
      F3: [
        { name: "Makai", percentage: 40 },
        { name: "Canola Meal", percentage: 20 },
        { name: "Soybean Meal", percentage: 15 },
        { name: "Binola Khal", percentage: 10 },
        { name: "Chokar", percentage: 10 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
      ],
      F4: [
        { name: "Makai", percentage: 25 },
        { name: "Chokar", percentage: 35 },
        { name: "Canola Meal", percentage: 20 },
        { name: "Binola Khal", percentage: 10 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
        { name: "Urea (Controlled)", percentage: 5 },
      ],
    },
    Heifer: {
      F1: [
        { name: "Makai", percentage: 35 },
        { name: "Canola Meal", percentage: 25 },
        { name: "Binola Khal", percentage: 15 },
        { name: "Chokar", percentage: 15 },
        { name: "Soybean Meal", percentage: 5 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
      ],
      F2: [
        { name: "Makai", percentage: 40 },
        { name: "Canola Meal", percentage: 20 },
        { name: "Binola Khal", percentage: 10 },
        { name: "Chokar", percentage: 15 },
        { name: "Molasses", percentage: 5 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
      ],
      F3: [
        { name: "Makai", percentage: 30 },
        { name: "Canola Meal", percentage: 30 },
        { name: "Soybean Meal", percentage: 15 },
        { name: "Binola Khal", percentage: 10 },
        { name: "Chokar", percentage: 10 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
      ],
      F4: [
        { name: "Makai", percentage: 25 },
        { name: "Chokar", percentage: 30 },
        { name: "Canola Meal", percentage: 20 },
        { name: "Binola Khal", percentage: 15 },
        { name: "Mineral Mixture & Salt", percentage: 5 },
        { name: "Urea (Controlled)", percentage: 5 },
      ],
    },
  }

  useEffect(() => {
    if (selectedCategory) {
      setSelectedFormula(Object.keys(formulas[selectedCategory])[0] || "")
    }
  }, [selectedCategory])

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setSelectedFormula("")
    setIsCreateFormula(false)
  }

  const handleCreateFormulaClick = () => {
    setIsCreateFormula(true)
    setSelectedFormula("")
    setSelectedCategory("")
  }

  const resetToHome = () => {
    setSelectedCategory("")
    setSelectedFormula("")
    setIsCreateFormula(false)
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title" onClick={resetToHome}>
            Wanda Calculator
          </h1>
          <p className="app-subtitle">Professional Animal Feed Mass Calculator</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {!selectedCategory && !isCreateFormula && (
          <div className="home-screen">
            <div className="welcome-section">
              <h2 className="welcome-title">Select Animal Category</h2>
              <p className="welcome-description">Choose the type of animal to calculate the appropriate feed formula</p>
            </div>

            <div className="category-grid">
              <div className="category-card" onClick={() => handleCategorySelect("Dry Animals")}>
                <div className="category-icon">🐄</div>
                <h3 className="category-title">Dry Animals</h3>
                <p className="category-description">Feed formulas for non-lactating animals</p>
                <div className="formula-count">{Object.keys(formulas["Dry Animals"]).length} Formulas</div>
              </div>

              <div className="category-card" onClick={() => handleCategorySelect("Milking Animals")}>
                <div className="category-icon">🥛</div>
                <h3 className="category-title">Milking Animals</h3>
                <p className="category-description">Specialized formulas for lactating animals</p>
                <div className="formula-count">{Object.keys(formulas["Milking Animals"]).length} Formulas</div>
              </div>

              <div className="category-card" onClick={() => handleCategorySelect("Heifer")}>
                <div className="category-icon">🐮</div>
                <h3 className="category-title">Heifer</h3>
                <p className="category-description">Growth formulas for young female cattle</p>
                <div className="formula-count">{Object.keys(formulas["Heifer"]).length} Formulas</div>
              </div>

              <div className="category-card create-formula" onClick={handleCreateFormulaClick}>
                <div className="category-icon">➕</div>
                <h3 className="category-title">Create Formula</h3>
                <p className="category-description">Build your own custom feed formula</p>
                <div className="formula-count">Custom</div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Breadcrumb */}
        {(selectedCategory || isCreateFormula) && (
          <div className="breadcrumb">
            <button className="breadcrumb-item" onClick={resetToHome}>
              Home
            </button>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">{isCreateFormula ? "Create Formula" : selectedCategory}</span>
          </div>
        )}

        {/* Formula Selection */}
        {selectedCategory && !isCreateFormula && (
          <div className="formula-selection">
            <div className="selection-header">
              <h2 className="selection-title">{selectedCategory} Formulas</h2>
              <p className="selection-description">Select a formula to calculate ingredient masses</p>
            </div>

            <div className="formula-selector">
              <label className="selector-label">Choose Formula:</label>
              <div className="formula-options">
                {Object.keys(formulas[selectedCategory]).map((formulaKey) => (
                  <button
                    key={formulaKey}
                    className={`formula-option ${selectedFormula === formulaKey ? "active" : ""}`}
                    onClick={() => setSelectedFormula(formulaKey)}
                  >
                    <span className="formula-name">Formula {formulaKey}</span>
                    <span className="ingredient-count">
                      {formulas[selectedCategory][formulaKey].length} ingredients
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Calculator Components */}
        {isCreateFormula ? (
          <FormulaFourCalculator />
        ) : (
          selectedCategory &&
          selectedFormula && (
            <WandaCalculator
              selectedFormula={selectedFormula}
              formulas={formulas[selectedCategory]}
              category={selectedCategory}
            />
          )
        )}

        {/* Formula Details */}
        {!isCreateFormula && selectedCategory && selectedFormula && (
          <div className="formula-details">
            <h3 className="details-title">Formula {selectedFormula} Composition</h3>
            <div className="ingredients-grid">
              {formulas[selectedCategory][selectedFormula]?.map((ing, index) => (
                <div key={index} className="ingredient-card">
                  <span className="ingredient-name">{ing.name}</span>
                  <span className="ingredient-percentage">{ing.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
