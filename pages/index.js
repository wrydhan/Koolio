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
import Image from 'next/image';



export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const tokenAddress = "{{token_address}}";

  const isWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const { data, isLoading } = useBalance(tokenAddress);

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
      <nav class= "w-full shadow-sm text-center aspect-[30] grid grid-cols-12">
  
        <div>
          
          <Image
            src="/sunglasses.jpg"
            width={40}
            height={40}
            alt="Pic of glasses"
          />
        </div>


        <div class="col-start-11">
          Home
        </div>
        <div class="col-start-12">
          Contact us
        </div>
      </nav>
    <h1 className="text-3xl font-bold underline text-center">Welcome to GTFOL Koolio</h1>
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

            <h2>(Click to chamge color of banner)</h2>
            
            
            
            <center><div class="shadow-2xl bg-white rounded-lg border-slate-200 text-center" style={{
          backgroundColor: isActive  ? '#' + Math.random().toString(16).slice(2,8) :'',
          color: isActive ? '#' + Math.random().toString(16).slice(2,8) :'',
          height: 100,
          width: 1000,
          
        }}
        onClick={handleClick} 
        
      >
        
      
               
                
                  Address: {address} 
                
            </div>

            <h2> Your Balance is: {data}</h2>

              
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
