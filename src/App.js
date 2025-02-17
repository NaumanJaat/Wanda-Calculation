import React, { useState, useEffect } from 'react';
import Sidebar from './components/SideBar.js'; // Import Sidebar Component
import WandaCalculator from './components/wandaF1.js';
import FormulaFourCalculator from './components/FormulaFourCalculator.js';
import './components/WandaCalculator.css';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFormula, setSelectedFormula] = useState('');
  const [isCreateFormula, setIsCreateFormula] = useState(false); // Track "Create Formula"
  const [sidebarActive, setSidebarActive] = useState(false); // Track sidebar visibility

  // Define formulas for each category
  const formulas = {
    'Dry Animals': {
      F1: [
        { name: 'Canola', percentage: 35 },
        { name: 'Maize', percentage: 5 },
        { name: 'Rapseed', percentage: 5 },
        { name: 'Wheat', percentage: 40 },
        { name: 'Chokar', percentage: 10 },
        { name: 'Sheera', percentage: 5 }
      ],
      F2: [
        { name: 'Canola', percentage: 35 },
        { name: 'Rapseed', percentage: 5 },
        { name: 'Wheat', percentage: 45 },
        { name: 'Chokar', percentage: 10 },
        { name: 'Sheera', percentage: 5 }
      ],
      F3: [
        { name: 'Soyabeen', percentage: 30 },
        { name: 'Rice Polish', percentage: 15 },
        { name: 'Wheat', percentage: 40 },
        { name: 'Chokar', percentage: 10 },
        { name: 'Sheera', percentage: 5 }
      ]
    },
    'Milking Animals': {
      F1: [
        { name: 'Canola', percentage: 30 },
        { name: 'Soyabeen', percentage: 20 },
        { name: 'Maize', percentage: 25 },
        { name: 'Wheat', percentage: 15 },
        { name: 'Chokar', percentage: 10 }
      ],
      F2: [
        { name: 'Maize', percentage: 40 },
        { name: 'Wheat', percentage: 30 },
        { name: 'Canola', percentage: 10 },
        { name: 'Soyabeen', percentage: 10 },
        { name: 'Rice Polish', percentage: 5 },
        { name: 'Sheera', percentage: 5 }
      ],
      F3: [
        { name: 'Chokar', percentage: 25 },
        { name: 'Wheat', percentage: 30 },
        { name: 'Soyabeen', percentage: 25 },
        { name: 'Maize', percentage: 10 },
        { name: 'Rice Polish', percentage: 5 },
        { name: 'Canola', percentage: 5 }
      ]
    },
    'Heifer': {
      F1: [
        { name: 'Canola', percentage: 30 },
        { name: 'Maize', percentage: 10 },
        { name: 'Wheat', percentage: 50 },
        { name: 'Chokar', percentage: 5 },
        { name: 'Sheera', percentage: 5 }
      ],
      F2: [
        { name: 'Maize', percentage: 35 },
        { name: 'Soyabeen', percentage: 25 },
        { name: 'Canola', percentage: 15 },
        { name: 'Wheat', percentage: 15 },
        { name: 'Rice Polish', percentage: 5 },
        { name: 'Chokar', percentage: 5 }
      ],
      F3: [
        { name: 'Chokar', percentage: 30 },
        { name: 'Soyabeen', percentage: 20 },
        { name: 'Maize', percentage: 25 },
        { name: 'Wheat', percentage: 15 },
        { name: 'Rice Polish', percentage: 5 },
        { name: 'Sheera', percentage: 5 }
      ]
    }
  };

  // Update the formula dropdown options when category changes
  useEffect(() => {
    if (selectedCategory) {
      // Set the default formula to F1 when category is selected
      setSelectedFormula(Object.keys(formulas[selectedCategory])[0] || '');
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) return; // Avoid redundant updates
    setSelectedCategory(category);
    setSelectedFormula(''); // Reset formula when category changes
    setIsCreateFormula(false); // Reset Create Formula state
    setSidebarActive(false); // Hide the sidebar after category selection
  };

  const handleCreateFormulaClick = () => {
    setIsCreateFormula(true); // Show Formula Four when clicked
    setSelectedFormula('F4'); // Set selected formula to F4
    setSidebarActive(false); // Hide the sidebar when "Create Formula" is clicked
  };

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive); // Toggle sidebar visibility
  };

  return (
    <div className="App">
      {/* Sidebar Toggle Button, visible only on small screens */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>

      {/* Sidebar */}
      <Sidebar onSelectCategory={handleCategorySelect} onCreateFormula={handleCreateFormulaClick} isActive={sidebarActive} />
      
      <div className={`main-content ${sidebarActive ? 'active' : ''}`}>
        {/* Landing Page Message */}
        {!selectedCategory && (
          <div className="landing-page" style={{color: 'white'}}>
            <h1>Welcome To Wanda Mass Calculator</h1>
            <p style={{color: 'white'}}>Select a category from the sidebar to start.</p>
          </div>
        )}

        {selectedCategory && !isCreateFormula && (
          <div className="formula-selector">
            <label className="formula-label" style={{color: 'white'}}>Select Formula: </label>
            <select
              value={selectedFormula}
              onChange={(e) => setSelectedFormula(e.target.value)}
              className="styled-select"
              disabled={!selectedCategory}
            >
              {Object.keys(formulas[selectedCategory]).map((formulaKey) => (
                <option key={formulaKey} value={formulaKey}>
                  {formulaKey}
                </option>
              ))}
            </select>
          </div>
        )}

        {isCreateFormula ? (
          <FormulaFourCalculator />
        ) : (
          selectedCategory && selectedFormula && (
            <>
              <WandaCalculator
                selectedFormula={selectedFormula}
                formulas={formulas[selectedCategory]}
              />
            </>
          )
        )}

        {selectedCategory && selectedFormula && (
          <div className="ingredient stylish-ingredients">
            <h3 className="ingredients-title">Ingredients for {selectedFormula}</h3>
            <ul className="ingredient-list-container">
              {formulas[selectedCategory][selectedFormula]?.map((ing, index) => (
                <li key={index} className="ingredient-item-stylish">
                  <span className="ingredient-name-stylish">{ing.name}</span>
                  <span className="ingredient-percentage-stylish">{ing.percentage}%</span>
                </li>
              )) || <p>No ingredients defined</p>}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
