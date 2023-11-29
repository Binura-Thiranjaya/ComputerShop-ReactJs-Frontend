import React from 'react'
import Home from './assets/Home.jpg'
import Mouse from './assets/mouse.jpg'

export default function body() {
  return (
    <div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-12 d-grid justify-content-center'>
            <img src={Home} alt='Home' className='w-100' style={{ height: 300 }} />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12 col-md-4'>
            <div className="card">
              <img src={Mouse} className="card-img-top" alt="Home" />
              <div className="card-body">
                <h5 className="card-title">Home</h5>
                <p className="card-text">This is a home page.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className="card">
              <img src={Mouse} className="card-img-top" alt="Home" />
              <div className="card-body">
                <h5 className="card-title">Home</h5>
                <p className="card-text">This is a home page.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>                </div>
          <div className='col-12 col-md-4'>
            <div className="card">
              <img src={Mouse} className="card-img-top" alt="Home" />
              <div className="card-body">
                <h5 className="card-title">Home</h5>
                <p className="card-text">This is a home page.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>                
          </div>
        </div>
      </div>
    </div>
  )
}
