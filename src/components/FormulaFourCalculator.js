
import React, { useState } from 'react';

const FormulaFourCalculator = () => {
  const [totalMass, setTotalMass] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', percentage: '' }]);
  const [result, setResult] = useState([]);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', percentage: '' }]);
  };

  const calculateIngredients = () => {
    if (!totalMass || isNaN(totalMass)) return;
    const mass = parseFloat(totalMass);
    const calculated = ingredients.map(ing => ({
      name: ing.name,
      mass: ((parseFloat(ing.percentage) / 100) * mass).toFixed(2)
    }));
    setResult(calculated);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-box">
        <h1 className="calculator-title">Wanda Mass Calculator </h1>
        <input
          type="number"
          placeholder="Enter total mass in kg"
          value={totalMass}
          onChange={(e) => setTotalMass(e.target.value)}
          className="calculator-input"
        />
        {ingredients.map((ing, index) => (
          <div key={index} className="ingredient-input-group">
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ing.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              className="calculator-input"
            />
            <input
              type="number"
              placeholder="Percentage"
              value={ing.percentage}
              onChange={(e) => handleIngredientChange(index, 'percentage', e.target.value)}
              className="calculator-input"
            />
          </div>
        ))}
<button onClick={addIngredient} className="calculator-button add-btn" style={{ marginBottom: '1rem' }}>
  Add Ingredient
</button>
        <button onClick={calculateIngredients} className="calculator-button">Calculate</button>

        {result.length > 0 && (
          <div className="ingredient-list">
            <h2 className="ingredient-title">Ingredient Breakdown:</h2>
            <ul>
              {result.map((ing, index) => (
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

export default FormulaFourCalculator;
