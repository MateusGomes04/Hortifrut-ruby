import React, { useState, useEffect } from "react";
import "./index.css";
import api from "../../api";

export default function List() {
  const [fruits, setFruits] = useState([]);

  const getFruits = async () => {
    await api.get("/fruits")
      .then(response => {
        setFruits(response.data);
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }  

  useEffect(()=>{
    getFruits()
    console.log(fruits)
  }, [])

  return (
    <div className="tbody-form">
      <table class="table">
        <thead className="thead-lista">
          <tr>
            <th scope="col" className="th-lista">
              #
            </th>
            <th scope="col" className="th-lista">
              name
            </th>
            <th scope="col" className="th-lista">
              price
            </th>

            <th scope="col" className="th-lista">
              distributor
            </th>
            
            <th scope="col" className="th-lista">
              image
            </th>
          </tr>
        </thead>
        <tbody className="thead-lista">
          {
            fruits.map((fruit) => (
              <tr key={fruit.id}>
                <th scope="row">{fruit.id}</th>
                <td>{fruit.name}</td>
                <td>{fruit.prince}</td>
                <td>{fruit.distributor_name}</td>
                  <td><img src={fruit.image_url} alt="Trulli" width="40" height="40"></img></td>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  );
}
