import React,{useState,useEffect} from 'react'
import './Search.css';

export default function Searchbar() {

  const [coin,setcoin] = useState({ });
 
   


  async function getdata(sym){
    const data = await fetch(`https://api.coingecko.com/api/v3/coins/${sym}`);
    const res = await data.json();
    console.log(res.id);
    setcoin(res);
  }
  async function api(coin) {
		const url = `https://api.coingecko.com/api/v3/search?query=${coin}`
		const response = await fetch(url);
		const data = await response.json();
		const sym = data.coins[0].id;
		getdata(sym);


	}

  
    api("luna");

 

 
 
  return (



    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">

              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1"><img alt='placeholder' src={coin.image.large}/></div>
               
              </div>
              

            </div>
            <div className="details col-md-6">
              <h1 className="product-title">{coin.id}</h1>
              <div className="rating">
               
               <p> <span className="review-no">Rank: {coin.market_cap_rank}</span></p>
              </div>
              <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
              <h4 className="price">current price:   <span></span></h4>
              <p className="vote"><strong></strong> <strong></strong></p>
             
             
              <div className="action">
                <button className="add-to-cart btn btn-default" type="button">Add to portfolio</button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

