import React, { useEffect, useState } from 'react'
import Search from './Search';
import DropFilter from './DropFilter';
import Tables from './Tables';
import '../Tables.css';
import { Link } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
function Main() {
  const [data, setData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [search, setSearch] = useState("");
  const dataFetch = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => { setShownData(data); setData(data); });
  }
  useEffect(() => {
    dataFetch();
  }, []);


//DropDown Funtionality
  const dropDownChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'all') {
      setShownData(data);
    } else {
      const dropFilter = data.filter((item) => (item.name === selectedValue));
      setShownData(dropFilter);
      // console.log(data);

    }
  };

  //Search Funtionality
  const keys = ["name", "username", "email", "website","phone"];
  const searchChange = event => {
    setSearch(event.target.value);
    const searchFilter = data.filter(item =>
      keys.some((key) => item[key].toLowerCase().includes(event.target.value.toLowerCase()))
      // item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setShownData(searchFilter);
  };


  return (
    <div>
      <div class="px-0 bg-light">
        <Header />

        <div class="d-lg-flex ">
          <div style={{ backgroundColor: "rgb(222 214 214 / 17%);" }}><Sidebar /></div>

          <div id="topnavbar" class="TableTopNavbar">
            <div class="topnav mb-4 pt-5">
              <div class="d-flex px-1 TableTopColor"> <Link to="#home" class="active">All</Link> <Link to="#news">Active</Link> <Link to="#contact">Banned</Link>  </div>
            </div>
            <div class=" mb-3 px-md-3 px-2">

              <div className='d-flex row' style={{ width: "100%" }}>
              <div className='col-lg-4'>
              <DropFilter filterChanges={dropDownChange} /> 
              </div>
                <div className='col-lg-8'>
                <Search myValue={search} handleChange={searchChange} /> 
                </div>
              </div>



            </div>
            <div>
            <Tables myData={shownData} />
            </div>
            
            
          </div>
        </div>
      </div>

    </div>

  );

}
export default Main;