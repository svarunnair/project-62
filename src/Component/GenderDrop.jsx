import React from 'react';

const RadioButtonOptions = ({ selectedOption, onOptionChange }) => {
  const handleOptionChange = (option) => {
    onOptionChange(option);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <input
          type="radio"
          id="male"
          value="male"
          checked={selectedOption === 'male'}
          onChange={() => handleOptionChange('male')}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          value="female"
          checked={selectedOption === 'female'}
          onChange={() => handleOptionChange('female')}
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>
  );
};

export default RadioButtonOptions;

