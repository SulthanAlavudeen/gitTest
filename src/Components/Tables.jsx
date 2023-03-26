//import logo from './logo.svg';
import '../Tables.css';
import React from 'react'
//import { FaBeer } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { BiDotsVertical } from "react-icons/bi";


function Tables({myData}) {
  return (
    <div>
     <div className="table-responsive px-2">
                <table className="table table-borderless">
                    <thead className="TableRowColor">
                        <tr>
                        <th scope="col" className="bg-blights"><input type="checkbox" className="custom-control-input" id="customCheck2" /></th>
                            <th scope="col" className='bg-font-bigs'>Name</th>
                            <th scope="col" className="bg-blights">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone<span className="ps-1">Number</span></th>
                            <th scope="col">Website</th>                 
                            <th className="" scope="col">ACTIVE</th>
                            <th className="" scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {myData.map((item) => (
                        <tr key={item.id}>
                            <td><input type="checkbox" className="custom-control-input" id="customCheck2" /></td>
                            <td><span className="bg-blights bg-font-bigs">{item.name}</span></td>
                            <td><span className="bg-blights">{item.username}</span></td>
                            <td><span className="bg-blights">{item.email}</span></td>
                            <td><span className="bg-blights">{item.phone}</span></td>
                            <td><span className="bg-blights">{item.website}</span></td>
                            <td><span className="bg-blights text-center"><FcOk /></span></td>
                            <td><span className="bg-blights text-center"><BiDotsVertical /></span></td>
                            
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  );
}

export default Tables;