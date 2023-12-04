import React, { useState, useEffect } from 'react';
import Hm from './assets/Hm.jpg';
import Mouse from './assets/2.jpg';
import Ram from './assets/3.jpg';
import Motherboard from './assets/1.jpg';
import axios from 'axios';

export default function Body() {
  const [stockDetails, setStockDetails] = useState([]);

  useEffect(() => {
    // Fetch stock details from your API
    axios.get('http://localhost:8080/stock')
      .then(response => {
        //check visibility
        const filteredResponse = response.data.filter(stock => stock.visibility === '1');
        setStockDetails(filteredResponse);
        // setStockDetails(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching stock details:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const getImageForStock = (imageid) => {
    if (imageid === '1') {
      console.log("Motherboard");
      return Motherboard;
    }
    if (imageid === '2') {
      console.log("Mouse");
      return Mouse;
    }
    if (imageid === '3') {
      console.log("Ram");
      return Ram;
    }
    console.log("Hm");
    return Hm;
   
  };
  const handleEditClick = (id) => {
    console.log(`Edit button clicked for stock with id ${id}`);
    axios.put(`http://localhost:8080/stock/unpublish/${id}`)
      .then(response => {
        console.log(response);
        //reload page
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleDeleteClick = (id) => {
    console.log(`Delete button clicked for stock with id ${id}`);
    axios.delete(`http://localhost:8080/stock/${id}`)
      .then(response => {
        console.log(response);
        //reload page
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-12 d-grid justify-content-center'>
            <img src={Hm} alt='Home' className='w-100' style={{ height: 300 }} />
          </div>
        </div>
        <div className='row mt-3'>
          {stockDetails.map((stock) => (
            <div key={stock.id} className='col-12 col-md-4'>
              <div className="card">
                <img src={getImageForStock(stock.image)} className="card-img-top" alt="Stock" />
                <div className="card-body">
                  <h5 className="card-title">{stock.name}</h5>
                  <p className="card-text">{stock.description}</p>
                  <p className="card-text">Price: {stock.price}</p>
                  <p className="card-text">Quantity: {stock.quantity}</p>
                  {/* Edit On click  */}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditClick(stock.id)}
                  >
                    Un Publish
                  </button>
                    {/* Delete On click  */}
                   <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteClick(stock.id)}
                  >
                    Delete
                  </button>


                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
