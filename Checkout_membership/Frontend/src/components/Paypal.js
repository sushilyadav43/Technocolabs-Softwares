import React from 'react';
import { Card } from 'react-bootstrap';


export const Paypal = () => {
  return (
    <>

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p>After payment via PayPal's secure checkout, we will send
              you a link to download your files.</p>
            <div>
              <div className='row'>
                <div className='col-md-3 c-paypal'>
                  <Card style={{ width: '18.5rem' }}>
                    <Card.Img variant="top" src="/images/pyicon-1.svg" />
                    <Card.Body><button className='button '><Card.Link href="https://www.visa.co.in/pay-with-visa/visa-checkout.html" target="_blank">Visa</Card.Link></button></Card.Body>
                    
                  </Card>
                </div>
                <div className='col-md-3'>
                  <Card style={{ width: '18.5rem' }}>
                    <Card.Img variant="top" src="/images/pyicon-2.svg" />
                    <Card.Body><button className='button '><Card.Link href="https://www.visa.co.in/pay-with-visa/visa-checkout.html" target="_blank">MasterCard</Card.Link></button></Card.Body>
                  </Card>
                </div>
                <div className='col-md-3'>
                  <Card style={{ width: '18.5rem' }}>
                    <Card.Img variant="top" src="/images/pyicon-3.svg" />
                    <Card.Body><button className='button '><Card.Link href="https://www.visa.co.in/pay-with-visa/visa-checkout.html" target="_blank">American Express</Card.Link></button></Card.Body>
                  </Card>
                </div>
                <div className='col-md-3'>
                  <Card style={{ width: '18.5rem' }}>
                    <Card.Img variant="top" src="/images/pyicon-4.svg" />
                    <Card.Body><button className='button '><Card.Link href="https://www.visa.co.in/pay-with-visa/visa-checkout.html" target="_blank">Discover</Card.Link></button></Card.Body>
                  </Card>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Paypal;
