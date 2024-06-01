import React from 'react'
import {Link} from 'react-router-dom'


const Terms = () => {
  return (
    <>
    <header>
    <div>
    <img src={require('./images/logo.png')} alt="logo" style={{ width: '250px', margin: '10px' }} />
    </div>
    </header>
    <section className='terms'>
     <div>
        <img src={require('./images/sha_register_img.png')} alt="logo"/>
        </div>
        <div>
        <h2 id='register'>Register with the Social Health Authority</h2>
        <p>Enroll with the social health authority by completing the form with your information, and secure medical insurance for yourself and your family.</p>
        
        <p id='proceed'>
          By proceeding,  you agree to our<strong>  terms and conditions</strong> and <strong>privacy policy</strong>, consenting to the collection, use  and sharing of your information as described therein.
          <p id='link'><Link to="/login">Proceed</Link></p>
          </p>
          
          </div>
        </section>
      </>
      )
}

export default Terms