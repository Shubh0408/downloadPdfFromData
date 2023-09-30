import React, { useEffect, useState } from 'react'
import "./list.css"
import axios from 'axios'

const List = () => {
  const [details, setDetails] = useState([]);

  const GetResponse = async () => {
    try {
      const response = await axios.get("http://localhost:4000/productdescription");
    const data = response.data;
    setDetails(data);
   console.log(data);
    } catch (error) {
      console.error("error while fetching data");
    }
  }

  return (
    <div>
      <h2 className='font-bold text-xl my-3'>Product Description</h2>
      <button onClick={() => GetResponse()} className='my-3 border-gray-400 border-2 p-1 rounded-md text-gray-400 hover:text-black hover:border-black hover:bg-slate-200'>Get list</button>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Size</th>
            <th>Shape</th>
            <th>Cts</th>
            <th>Code</th>
            <th>P. Id</th>
          </tr>
        </thead>
        <tbody>

          {details.map((element,i)=>{
            return(
              <tr>
            <td>{element.s_no}</td>
            <td>{element.dimension}</td>
            <td>{element.shape}</td>
            <td>{element.cts}</td>
            <td>{element.stone_code}</td>
            <td>{element.p_id}</td>
          </tr>
            )
          })}
          
        </tbody>
      </table>
      
    </div>
  )
}

export default List