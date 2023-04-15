import {
  useAddress,
  useDisconnect,
  useMetamask,
  useContract,
  useNetwork,
  useNetworkMismatch,
  ChainId,
} from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import Web3 from 'web3';
import { useBalance } from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";



export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const isWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const { data, isLoading } = useBalance(NATIVE_TOKEN_ADDRESS);
  var colors = ["red", "lightblue", "gold", "orange", "lightgreen"];   

  // Function to write the new greeting to the blockchain
  async function writeGreeting() {
    if (!address) return;

    if (isWrongNetwork) {
      switchNetwork(ChainId.Goerli);
      return;
    }

    await contract?.call("setGreeting", newGreeting);
  }
  
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    //setIsActive(true);
  };

  
  return (
    
    
    <body>
    <h1 className="text-3xl font-bold underline">Welcome to GTFOL Koolio</h1>
    <div>
      
      
      {address ? (
        <>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded btn2"
 onClick={disconnectWallet} >
            Disconnect Wallet

          </button>

          <body type='bannerBody'>
            cool, you made it!


            
          </body>
          <div>
            <h1>
              <center>Here is Your Customizable Banner w/ wallet address</center>
            </h1>

            <h2>(only change color for now)</h2>
            
            
            
            <center><div style={{
          backgroundColor: isActive  ? '#' + Math.random().toString(16).slice(2,8) :'',
          color: isActive ? '#' + Math.random().toString(16).slice(2,8) :'',
          height: 100,
          width: 1000,
          
        }}
        onClick={handleClick} 
        
      >
        click here
      
               
                <center> 
                  {address} 
                </center>
            </div>

            <h2> Your Balance is: {}</h2>

              
            </center>
          </div>
        </>
      ) : (
        <button onClick={connectWithMetamask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded btn2">
          Connect Wallet
        </button>
      
      )}
    </div>
      
    </body>
  );
}
