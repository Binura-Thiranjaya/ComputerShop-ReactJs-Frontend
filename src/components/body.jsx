import React from 'react'
import Hm from './assets/Hm.jpg'
import Mouse from './assets/Mouse.jpg'
import Ram from './assets/Ram.jpg'
import Motherboard from './assets/Motherboard.jpg'


export default function body() {
  return (
    <div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-12 d-grid justify-content-center'>
            <img src={Hm} alt='Home' className='w-100' style={{ height: 300 }} />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12 col-md-4'>
            <div className="card">
              <img src={Mouse} className="card-img-top" alt="Home" />
              <div className="card-body">
                <h5 className="card-title">Mouse</h5>
                <p className="card-text">Mouse, hand-controlled electromechanical device for interacting with a digital computer that has a graphical user interface. The mouse can be moved around on a flat surface to control the movement of a cursor on the computer display screen.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className="card">
              <img src={Ram} className="card-img-top" alt="Home" />
              <div className="card-body">
                <h5 className="card-title">Ram</h5>
                <p className="card-text">A faulty RAM module can cause various problems, such as data corruption, system instability, or boot failure. Fortunately, you can fix a faulty RAM module by following some simple steps. In this article, we will show you how to diagnose, remove, and replace a faulty RAM module.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>                </div>
          <div className='col-12 col-md-4'>
            <div className="card">
              <img src={Motherboard} className="card-img-top" alt="Home" />
              <div className="card-body">
                <h5 className="card-title">Motherboard</h5>
                <p className="card-text">The official motherboard definition is that it's the main printed circuit board within a computer, which means it's the primary piece of circuitry that all of the other pieces plug into to create a cohesive whole.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>                
          </div>
        </div>
      </div>
    </div>
  )
}
