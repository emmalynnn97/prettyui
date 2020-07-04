import React from 'react';
import './App.css';
import PricingCard from './PricingCard'

function App() {
  return (
    <div className="App">
      <div className='card-container' style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'50px'
      }}>
        <PricingCard plan='Personal' price='$50' features={<ul>
                        <li>100 Subscribers</li>
                        <li>5 Team Members</li>
                        <li>5 Metrics</li>
                        <li>Email/SMS</li>
                        <li>Custom CSS</li>
                        <li>SEO</li>
                    </ul>}/>
        <PricingCard plan='Professional' features={<ul>
                        <li>1000 Subscribers</li>
                        <li>10 Team Members</li>
                        <li>15 Metrics</li>
                        <li>Email/SMS</li>
                        <li>Custom CSS</li>
                        <li>SEO</li>
                    </ul>} price='$100'/>
        <PricingCard plan='Enterprise' features={<ul>
                        <li>100,000 Subscribers</li>
                        <li>50 Team Members</li>
                        <li>200 Metrics</li>
                        <li>Email/SMS</li>
                        <li>Custom CSS</li>
                        <li>SEO</li>
                    </ul>} price='$150'/>
      </div>
    </div>
  );
}

export default App;
