import React, { useState } from 'react';
import axios from 'axios';

export default function Navbar() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    image: 0
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  }
 
  const handleSave = () => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('quantity', formData.quantity);
    data.append('image', formData.image);
    data.append('visibility', "1");

    const headers = {
      'Content-Type': 'application/json'

    };
    axios.post('http://localhost:8080/stock', data, headers)
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Xpresss Pc Repair</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</a>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  onChange={(e) => handleInputChange('price', e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Quantity"
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <select className="form-select" onChange={(e) => handleInputChange('image', e.target.value)}>
                  <option value="0">Select Image</option>
                  <option value="1">Motherboard</option>
                  <option value="2">Mouse</option>
                  <option value="3">Ram</option>
                </select>
              </div>
              <div className="col-md-6">
                <button className="btn btn-danger" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
