import React ,{useEffect, useState} from 'react'
import "./CSS/Search.css"
import { useLocation } from 'react-router-dom';
import Chart from './Chart';
import Footer from './Footer';



export default function Search() {
    const location = useLocation();
    const {name} = location.state;

    const [coin,setcoin] = useState("coin");
    const [loading,setLoading]=useState(true);
	const [id,setid] = useState();
 
   


    async function getdata(sym){
      const data = await fetch(`https://api.coingecko.com/api/v3/coins/${sym}`);
      const res = await data.json();
      console.log(res.id);
	  setid(res.id);
      
     
      setcoin(res);
	  setLoading(false);
	 // console.log(res);
    }
    async function api() {
         
        const url = `https://api.coingecko.com/api/v3/search?query=${name}`
        const response = await fetch(url);
        const data = await response.json();
        const sym = data.coins[0].id;
        getdata(sym);
		console.log(id);
		//console.log(sym);
		


    }
    
useEffect(()=>{
	setLoading(true);
    api();
},[])
      

  return (

<>

  
	
	<div className="con">
        <div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1" ><img alt={coin.id} src={!loading && coin.image.large}/></div>
						  
						</div>
						
						
					</div>
					<div className="details col-md-6">
						<h1 className="product-title">{coin.id}</h1>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">Rank:{coin.market_cap_rank}</span>
						</div>
						 <p className="product-description">{!loading && coin.description.en.substr(0,250)}.....</p> 
						<h4 className="price">current price:${!loading && coin.tickers[0].converted_last.usd}  <span></span></h4>
						<p className="vote"> Change in last 24H <strong>${!loading && coin.market_data.price_change_24h}</strong></p>
						<p className="vote"> ATH : <strong>${!loading && coin.market_data.ath.usd}</strong></p>
						<p className="vote"> ATL : <strong>${!loading && coin.market_data.atl.usd}</strong></p>
						
						
						<div className="action">
						<a href='https://www.binance.com/en' target="_blank" >
							<button className="add-to-cart btn btn-default" type="button">Buy Coin</button>
							</a>
						
						</div>
					</div>
				</div>
			</div>
		</div>
</div>
</div>


{
  loading?(console.log("wait")):(<Chart name = {id} />)
  
}
{
	<Footer/>
}
  </>

  )
}
