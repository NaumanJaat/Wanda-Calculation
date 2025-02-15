import React, { useState } from 'react';
import './WandaCalculator.css';

const WandaCalculator = () => {
  const [totalMass, setTotalMass] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const ingredientPercentages = [
    { name: 'Canola', percentage: 35 },
    { name: 'Maize', percentage: 5 },
    { name: 'Rapseed', percentage: 5 },
    { name: 'Wheat', percentage: 40 },
    { name: 'Chokar', percentage: 10 },
    { name: 'Sheera', percentage: 5 }
  ];

  const calculateIngredients = () => {
    if (!totalMass || isNaN(totalMass)) return;
    const mass = parseFloat(totalMass);
    const calculated = ingredientPercentages.map(ing => ({
      ...ing,
      mass: ((ing.percentage / 100) * mass).toFixed(2)
    }));
    setIngredients(calculated);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-box">
        <h1 className="calculator-title">Wanda Mass Calculator</h1>
        <input
          type="number"
          placeholder="Enter total mass in kg"
          value={totalMass}
          onChange={(e) => setTotalMass(e.target.value)}
          className="calculator-input"
        />
        <button
          onClick={calculateIngredients}
          className="calculator-button"
        >
          Calculate
        </button>

        {ingredients.length > 0 && (
          <div className="ingredient-list">
            <h2 className="ingredient-title">Ingredient Breakdown:</h2>
            <ul>
              {ingredients.map((ing, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-name">{ing.name}</span>
                  <span className="ingredient-mass">{ing.mass} kg</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WandaCalculator;
