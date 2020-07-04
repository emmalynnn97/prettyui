import React from 'react';
import './App.css';
import PricingCard from './PricingCard'
import HomeBanner from './HomeBanner'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
function App() {
  const cardContainerStyle={
    display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'100px'
  }
  const appStyle={
    display:'flex',
    height:'100vh',
    width:'100vw',
  }
  const leftStyle={
    width:'15%',
    height:'100%',
    backgroundColor:'#eff0f1',
    fontFamily:'Montserrat',
    paddingLeft:'25px',
  }
  const rightStyle={
    width:'75%',
    height:'100%',
  }
  
  const leftContentStyle={
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    height:'25%'
  }
  const baseApp =()=><>
  <div style={appStyle} className="App">
     <div style={leftStyle}>
       <div style={leftContentStyle}>
       <h2 style={{letterSpacing:'1.5px'}}>Prettyui</h2>
       <Link to='/'>Home</Link>
       <Link to='/pricing-card'>Pricing Card</Link>
       </div>
     </div>
     <div style={rightStyle}>
       <HomeBanner heading='Welcome to Prettyui' copy='Prettyui is a design system created by Emma Lynn Guy. It was developed with minimalism and aesthetics in mind. Use Prettyui to build out complex websites, templates, and themes. '/>
     </div>
     </div>
  </>
  const baseAppWithPricingCard=()=><>
  <div style={appStyle} className="App">
     <div style={leftStyle}>
       <div style={leftContentStyle}>
       <h2 style={{letterSpacing:'1.5px'}}>Prettyui</h2>
       <Link to='/'>Home</Link>
       <Link to='/pricing-card'>Pricing Card</Link>
       </div>
     </div>
     <div style={rightStyle}>
      <HomeBanner heading='Pricing Cards' copy='Interactive pricing cards, toggle between monthly and yearly rates.'/>
       <div className='card-container' style={cardContainerStyle}>
        <PricingCard toggleColor='white' toggleBgColor='#b162d1' plan='Personal' price={50} features={<ul>
                        <li>100 Subscribers</li>
                        <li>5 Team Members</li>
                        <li>5 Metrics</li>
                        <li>Email/SMS</li>
                        <li>Custom CSS</li>
                        <li>SEO</li>
                    </ul>}/>
        <PricingCard toggleColor='white' toggleBgColor='#b162d1' plan='Professional' features={<ul>
                        <li>1000 Subscribers</li>
                        <li>10 Team Members</li>
                        <li>15 Metrics</li>
                        <li>Email/SMS</li>
                        <li>Custom CSS</li>
                        <li>SEO</li>
                    </ul>} price={100}/>
        <PricingCard toggleColor='white' toggleBgColor='#b162d1' plan='Enterprise' features={<ul>
                        <li>100,000 Subscribers</li>
                        <li>50 Team Members</li>
                        <li>200 Metrics</li>
                        <li>Email/SMS</li>
                        <li>Custom CSS</li>
                        <li>SEO</li>
                    </ul>} price={150}/>
        </div>
     </div>
     </div>
  </>
  return (
    <Router>
    <Route exact path='/' component={baseApp} />
     <Route path='/pricing-card' component={baseAppWithPricingCard}/>
    </Router>
  );
}

export default App;
