import React, { useState } from 'react'
import { ethers } from 'ethers';
import  './CSS/Walletconnect.css';
import Footer from './Footer';

export default function WalletConnect() {

  // const add = "0xf51D654612E5c219c26A59a533";
  //  const eth = "6";

    const [walletadd, setwalletadd] = useState("Not connected");
    const [txerr, settxerr] = useState();
    const[txs,settxs] = useState();
   

    async function requestAccount() {

        // check metamask

        if (window.ethereum) {
            console.log("detected");
        } else {
            console.log("metamask not detected");
        }

        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setwalletadd(accounts[0]);
            
        } catch (error) {
            console.log(error);
        }
    }

    async function connwallet() {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount();



        }
    }

    const send = async(add,eth)=> {
        
        try {
            if (!window.ethereum) {
                throw new Error("no wallet connected or found");
            } else {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                ethers.utils.getAddress(add);
                const tx = await signer.sendTransaction({
                    to: add,
                    value: ethers.utils.parseEther(eth)
                });

                settxs("Success");
                console.log(tx);
            }
        } catch (err) {
            settxerr(err.message.substr(0,50));
        }


    }

    const handlesubmit = async(e)=>{
        e.preventDefault();
        const add = e.target.Address.value;
        const eth = e.target.Amount.value;
       await send(add,eth);
    }


    
  



    return (

        <>
        <div className="sendetherbgcolor">
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto p-4 m-5 border-light shadow-sm">
                        <h3 className="pb-3">Send Ethereum </h3>
                        <div className="form-style">
                            <form onSubmit={handlesubmit} >
                                <div className="form-group pb-3">
                                    <input type="text" name="Address" placeholder="Address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group pb-3">
                                    <input type="text" name='Amount' placeholder="Amount" className="form-control" id="exampleInputPassword1"/>
                                </div>
                               
                                <div className="pb-2">
                                    <button   type="submit" className="btn btn-dark w-100 font-weight-bold mt-2">Send</button>
                                </div>
                            </form>
                            <div className="sideline">OR</div>
                            <div>
                                <button onClick={connwallet} type="submit" className="btn btn-primary w-100 font-weight-bold mt-2"><i className="fa fa-facebook" aria-hidden="true"></i> Connect Wallet</button>
                            </div>
                            <div className="pt-3 text-center">
                                Wallet :<p>{walletadd}</p>

                                <h5>{txerr}</h5>

                                <h5 className='txx'>Status:{txs}</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            {<Footer />}

            
        </>
    )
}

