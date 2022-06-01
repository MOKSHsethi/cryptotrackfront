import React,{useState} from 'react'
import './CSS/portfolio.css'
import Footer from './Footer'
export default function Portfolio() {

    const[coin,setcoin] = useState();
    const[quantity,setquan] = useState();
    const[price,setbuyprice] = useState();
    const[coinprice,setcoinprice] = useState();
    //
    const[itemquan,setitemquan] = useState([]);
    const[itemprice,setitemprice] = useState([]);
    const[item,setitem] = useState([]);
    const[itemcoinprice,setitemcoinprice] = useState([]);
    //
    const[nowprice,setnowprice] = useState();
    const[Loading,setLoading] = useState(true);
  


     function chng(e){
              setcoin(e.target.value);
     }

     const add = ()=>{
      
         if(coin){

                 setitem([...item,coin]);
                 setitemquan([...itemquan,quantity]);
                 setitemprice([...itemprice,price]);
                 api(coin);
                 setLoading(true);
                 setitemcoinprice([...itemcoinprice,coinprice]);
                 setcoin('');
                
                 setquan('');
                 setbuyprice('');
                 console.log(item);
         }
     }

     // fetch//
     async function getdata(sym){
        const data = await fetch(`https://api.coingecko.com/api/v3/coins/${sym}`);
        const res = await data.json();
       
        setLoading(false);
       
   
        setnowprice(res);
        let v = res.tickers[0].converted_last.usd;
        console.log(v);
        
        if(!Loading && (res.tickers[0].converted_last.usd)){
               setcoinprice(v);
               console.log(coinprice);
        }

        
    
            
       
        
    
        console.log(res);
      }
      async function api(name) {
           
          const url = `https://api.coingecko.com/api/v3/search?query=${name}`
          const response = await fetch(url);
          const data = await response.json();
          const sym = data.coins[0].id;
          getdata(sym);
  
  
      }
    
   

    const handlesubmit = async(e)=>{
        e.preventDefault();         
    }
    return (
        <>
        
            <div className="main-content">
                <div className="container mt-7">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="card bg-default shadow">
                                <div className="card-header bg-transparent border-0">
                                    <h1 className="text-white mb-0">Portfolio</h1>
                                    <h3 className="text-white mb-0">Calcuate your Profit and Loss </h3>
                                  
                                   
                                </div>
                                {
                                    item.map((elem,ind)=>{



                                      
                                       
                                      
                                        return(
                                            <div className="table-responsive" key={ind}>
                                    <table className="table align-items-center table-dark table-flush">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Coin</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Avg Buying price</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Profit/Loss</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div className="media align-items-center">
                                                        <a href="/" className="avatar rounded-circle mr-3">
                                                            <img alt="j" src={!Loading && nowprice.image.small}/>
                                                        </a>
                                                        <div className="media-body">
                                                            <span className="mb-0 text-sm">{elem}</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    {itemquan[ind]}
                                                </td>
                                                <td>
                                                    <span className="badge badge-dot mr-4">
                                                        <i className="bg-warning"></i> {itemprice[ind]}
                                                    </span>
                                                </td>
                                                <td>
                                                   <span>{!Loading && ((nowprice.tickers[0].converted_last.usd))}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-1">{!Loading && ((nowprice.tickers[0].converted_last.usd)*itemquan[ind])-(itemquan[ind]*itemprice[ind])}$</span>
                                                       
                                                    </div>
                                                </td>
                                              
                                                <td>
                                                
                                                        <span className="mr-2">{!Loading && ((nowprice.tickers[0].converted_last.usd)*itemquan[ind])}$</span>
                                                       
                                                  
                                                </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                   
                                </div>
                                        )
                                    })
                                }

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="gol">
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto p-4 m-5 border-light shadow-sm">
                        <h3 className="pb-3">Add to portfolio</h3>
                        <div className="form-style">
                            <form onSubmit={handlesubmit} >
                                <div className="form-group pb-3">
                                    <input type="text" value={coin} onChange={chng} name="Coin" placeholder="Coin" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group pb-3">
                                    <input type="text" value={quantity} onChange={(e)=>setquan(e.target.value)} name='Amount' placeholder="Amount" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="form-group pb-3">
                                    <input type="text" value={price} onChange={(e)=>setbuyprice(e.target.value)} name='price' placeholder="Buying price" className="form-control" id="exampleInputPassword1"/>
                                </div>
                               
                                <div className="pb-2">
                                    <button onClick={add} type="submit" className="btn btn-dark w-100 font-weight-bold mt-2">Add</button>
                                </div>
                            </form>
                            
                          
                        </div>

                    </div>
                </div>
            </div>
            </div>
           

{ <Footer/>}
        </>

    )
}
