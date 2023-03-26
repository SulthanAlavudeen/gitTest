import React, { useState } from 'react'

const DropFilter = (props) => {
  const [options, setOptions] = useState([]);
  const dropList = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((datas) => {
        const optionsArray = datas.map((item) => ({ label: item.name, value: item.name }));
        setOptions(optionsArray);
      })
      .catch((error) => console.error(error));
  }
  dropList();
  return (
    <div>
      <div class="input-wrapper">
        <label for="first" className='aboveContent'>Role</label>
        <select onChange={props.filterChanges} className="form-select form-select-lg">
          <option value="all">All</option>
          {options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default DropFilter