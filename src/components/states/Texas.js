import React from 'react'
import taxas from '../../images/dell.jpeg'
import logo from '../../images/logo.png'
import back from '../../images/back.png'
import { Link } from 'react-router-dom';
import dell from '../brands/dell'

function California() {
  return (
    <div className="container">
      <div className="head">
        <img className="watermark" src={logo} />
        <h1>NARUTO CENTER</h1>
      </div>
      <hr></hr>
      <div className="img_container">
        <Link className="link" to='/landing'> <img className="back" src={back} /></Link>
        <img className="watermark" src={taxas} />
        <h1>Dell</h1>
      </div>
      <div class="table-box">
      <div class="table-row table-head">
          <div class="table-cell first-cell-Auction ">
            <p >Name</p>
          </div>
          <div class="table-cell first-cell">
            <p>CPU</p>
          </div>
          <div class="table-cell first-cell">
            <p>  RAM</p>
          </div>
          <div class="table-cell first-cell">
            <p> HARD </p>
          </div>
          <div class="table-cell first-cell">
            <p> GPU </p>
          </div>
          <div class="first-cell table-cell border">
            <p> Price </p>
          </div>
        </div>
        <div>

        {
            dell.stateData.map((item, index) => {

              return <div class="table-row">
                <div class="table-cell first-cell-Auction ">
                  <p>{item.name}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>{item.cpu}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>8GB</p>
                </div>
                <div class="table-cell first-cell">
                  <p>256SSD + 1TB HDD</p>
                </div>
                <div class="table-cell first-cell">
                  <p>NVIDIA MX350 2GB</p>
                </div>
                <div class="table-cell first-cell border">
                  <p>800$</p>
                </div>
              </div>


            })
          }


          <div className='notes'>
            <h1>ملاحضات</h1>

          </div>

        </div>
      </div>
    </div>
  )
}

export default California