import React,{ useState } from 'react';
import { getAccount } from 'simple-web3';
import './App.css';
import { CONTRACT_ABI, CONTRACT_ADDRESS,GAS_LIMIT } from './config';

function App() {
  const[loading, setLoading] = useState(false);
  const mintNFT = async () => {
    try{
      setLoading(true);
      let ACCOUNT = await getAccount();
      const contract  = new window.web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)

      await contract.methods.mint().send({
        from:ACCOUNT,
        gasLimit: GAS_LIMIT,
        value: 0
      })

      setLoading(false)
      alert('Yayy! minted a GoldenMan')
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }
  return (
    loading?
    <div className='App'>
        <h1>Minting</h1>
    </div>
    : <div className='App'>
        <h1>Mint my NFT</h1>
        <button onClick={mintNFT}>Mint an NFT</button>
      </div>
  );
}

export default App;
