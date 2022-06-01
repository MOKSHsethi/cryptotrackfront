import React from 'react';
import './CSS/about.css';
import Footer from './Footer';

export default function About() {
  return (
   <>
   <div className="about-section paddingTB60 gray-bg">
    <div className="container">
                    <div className="row">
						<div className="col-md-7 col-sm-6">
							<div className="about-title clearfix">
								<h1>About <span>CoinCap</span></h1>
								<h3>Crypto Tracking System</h3>
								<p className="about-paddingB">The system “Crypto Tracking System” deals with the Web Application for tracking the real time data like price, market cap etc. of any crypto currency and we can also connect our decentralized wallet with it. </p>
                <p className="about-paddingB">This System manages all the information about Cryptocurrency and decentralized wallet. The purpose of this system is to provide the charts, price, market cap and coin supply to the users. Clients can also connect their decentralize wallet to transfer Ethereum from one wallet to another with ease.</p>
					  
              <pre>







              </pre>
               
	           
	           
	        
	        </div>
							</div>
						</div>
						{/* <div className="col-md-5 col-sm-6">
							<div className="about-img">
							<img src="./crypto.png" alt="/" />
							</div>
						</div>	*/}
                    </div> 
                    </div>
                

                {
                  <Footer />
                }
            
   </>
  )
}
//MONGO_DB_LOCAL_URL=mongodb://localhost:27017/cryptopp