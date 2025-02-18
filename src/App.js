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
      ],
      F4: [
        { name: 'Makai', percentage: 20 },
        { name: 'Canola Meal', percentage: 25 },
        { name: 'Binola Khal', percentage: 30 },
        { name: 'Chokar', percentage: 15 },
        { name: 'Mineral Mixture & Salt', percentage: 5 },
        { name: 'Urea (Controlled)', percentage: 5 }
      ],
      F5: [
        { name: 'Makai', percentage: 25 },
        { name: 'Canola Meal', percentage: 20 },
        { name: 'Binola Khal', percentage: 25 },
        { name: 'Chokar', percentage: 20 },
        { name: 'Molasses', percentage: 5 },
        { name: 'Mineral Mixture & Salt', percentage: 5 }
      ],
      F6: [
        { name: 'Makai', percentage: 30 },
        { name: 'Canola Meal', percentage: 15 },
        { name: 'Binola Khal', percentage: 20 },
        { name: 'Chokar', percentage: 25 },
        { name: 'Soybean Meal', percentage: 5 },
        { name: 'Mineral Mixture & Salt', percentage: 5 }
      ]
    },
    'Milking Animals': {
      F1: [
        { name: 'Makai', percentage: 30 },
        { name: 'Canola Meal', percentage: 30 },
        { name: 'Binola Khal', percentage: 20 },
        { name: 'Chokar', percentage: 10 },
        { name: 'Soybean Meal', percentage: 5 },
        { name: 'Mineral Mixture & Salt', percentage: 5 }
      ],
      F2: [
        { name: 'Makai', percentage: 35 },
        { name: 'Canola Meal', percentage: 25 },
        { name: 'Binola Khal', percentage: 15 },
        { name: 'Chokar', percentage: 10 },
        { name: 'Molasses', percentage: 10 },
        { name: 'Mineral Mixture & Salt', percentage: 5 }
      ],
      F3: [
        { name: 'Makai', percentage: 40 },
        { name: 'Canola Meal', percentage: 20 },
        { name: 'Soybean Meal', percentage: 15 },
        { name: 'Binola Khal', percentage: 10 },
        { name: 'Chokar', percentage: 10 },
        { name: 'Mineral Mixture & Salt', percentage: 5 }
      ],
      F4: [
        { name: 'Makai', percentage: 25 },
        { name: 'Chokar', percentage: 35 },
        { name: 'Canola Meal', percentage: 20 },
        { name: 'Binola Khal', percentage: 10 },
        { name: 'Mineral Mixture & Salt', percentage: 5 },
        { name: 'Urea (Controlled)', percentage: 5 }
      ]
    },
    'Heifer': {
      F1: [
        { name: 'Makai', percentage: 35 },
        { name: 'Canola Meal', percentage: 25 },
        { name: 'Binola Khal', percentage: 15 },
        { name: 'Chokar', percentage: 15 },
        { name: 'Soybean Meal', percentage: 5 },
        { name: 'Mineral Mixture & Salt', percentage: 5 }
      ],
      F2: [
        { name: 'Makai', percentage: 40 },
        { name: 'Canola Meal', percentage: 20 },
        { name: 'Binola Khal', percentage: 10 },
        { name: 'Chokar', percentage: 15 },
        { name: 'Molasses', percentage: 5 },
        { name: 'Mineral Mixture & Salt', percentage: 5 }
      ],
      F3: [
        { name: 'Makai', percentage: 30 },
        { name: 'Canola Meal', percentage: 30 },
        { name: 'Soybean Meal', percentage: 15 },
        { name: 'Binola Khal', percentage: 10 },
        { name: 'Chokar', percentage: 10 },
        { name: 'Mineral Mixture & Salt', percentage: 5 }
      ],
      F4: [
        { name: 'Makai', percentage: 25 },
        { name: 'Chokar', percentage: 30 },
        { name: 'Canola Meal', percentage: 20 },
        { name: 'Binola Khal', percentage: 15 },
        { name: 'Mineral Mixture & Salt', percentage: 5 },
        { name: 'Urea (Controlled)', percentage: 5 }
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
        {!selectedCategory && !isCreateFormula && (
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

        {/* Only show ingredients if not in create formula mode */}
        {!isCreateFormula && selectedCategory && selectedFormula && (
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
