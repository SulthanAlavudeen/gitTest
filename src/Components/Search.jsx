import React from 'react'
//import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {
  return (
    <div>

<input
      type="text"
      placeholder="Search..."
      value={props.myValue}
      onChange={props.handleChange}
      className="form-control form-control-lg"
      style={{width:"100%"}}
      
    />
    </div>
  )
}

export default Search