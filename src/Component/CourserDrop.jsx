import React from 'react';

const CheckboxOptions = ({ selectedOptions, onSelectedOptionsChange }) => {
  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    onSelectedOptionsChange(updatedOptions);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      {/* MCA Checkbox */}
      <div>
        <input
          type="checkbox"
          value="MCA"
          checked={selectedOptions.includes('MCA')}
          onChange={() => handleCheckboxChange('MCA')}
        />
        <label>MCA</label>
      </div>

      {/* BSC Checkbox */}
      <div>
        <input
          type="checkbox"
          value="BSC"
          checked={selectedOptions.includes('BSC')}
          onChange={() => handleCheckboxChange('BSC')}
        />
        <label>BSC</label>
      </div>

      {/* Btech Checkbox */}
      <div>
        <input
          type="checkbox"
          value="Btech"
          checked={selectedOptions.includes('Btech')}
          onChange={() => handleCheckboxChange('Btech')}
        />
        <label>Btech</label>
      </div>
    </div>
  );
};

export default CheckboxOptions;
