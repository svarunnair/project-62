import React from 'react';

const DropdownOptions = ({ selectedOption, onOptionChange }) => {
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    onOptionChange(selectedValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <select
        id="selectField"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Select...</option>
        <option value="HR">HR</option>
        <option value="Sales">Sales</option>
        <option value="Manager">Manager</option>
      </select>
    </div>
  );
};

export default DropdownOptions;
