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

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const isWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();


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
    // setIsActive(true);
  };
  var colors = ["red", "lightblue", "gold", "orange", "lightgreen"];   
  
  var randomValue = Math.random(4);

  return (
    
    
    <body>
    <h1>Welcome to GTFOL Koolio</h1>
    <div>
      
      
      {address ? (
        <>
          <button onClick={disconnectWallet} className="btn2">
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
          backgroundColor: isActive ? colors[3] :'',
          color: isActive ? 'white' : '',
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
              
            </center>
          </div>
        </>
      ) : (
        <button onClick={connectWithMetamask} className="btn">
          Connect Wallet
        </button>
      
      )}
    </div>
      
    </body>
  );
}
