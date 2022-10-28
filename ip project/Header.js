import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last'>
                    <h1 className='display-2'>
                        Online Transactions <br/>are now easy.
                    </h1>
                    <p className='main-hero-para'>
                    Online transaction is a payment method in 
                    which transfer of money happens online over electronic fund transfer.
                    OLTP is secure and password protected.
                    </p>
                    <h3> Get early access for you </h3>
                    <div className='input-group mt-3'>
                        <input type = "text" className='rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text' placeholder = "Enter Your Email" />
                        <div className='input-group-button'>Get it Now
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center 
                align-items-center main-herosection-images order-md-first order-sm-first'>
                    <img src='./images/hero1.jpg' alt='heroimg' className='img-fluid' />
                    <img src='./images/hero2.jpg' alt='heroimg2' className='img-fluid main-hero-img2' />
                </div>
            </div>
        </section>
    </header>
    </>
  )
}

export default Header