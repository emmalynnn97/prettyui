import React, { Component } from 'react'

export class PricingCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             features:this.props.features,
             price:this.props.price,
             plan:this.props.plan,
             transform:'',
             bottomBgColor:'#ffffff',
             bottomTextColor:'#000000',
             buttonBgColor:'#b162d1',
             buttonTextColor:'white',
             transition:'.6s ease',
             bottomHeight:'0%',
             priceColor:'black',
             toggleColor:this.props.toggleColor,
             toggleBgColor:this.props.toggleBgColor,
             toggleSetting:'M',
             toggleActive:false,
             billingCycle:'month'
        }
    }
    
    render() {
        const cardStyle={
            height:'450px',
            width:'200px',
            boxShadow:'5px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius:'7.5px',
            margin:'25px',
            transform:this.state.transform,
            transition:this.state.transition
        }
        const topStyle={
            fontFamily:'Montserrat',
            height:'37%',
            width:'100%',
            backgroundColor:'#eff0f1',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',
            textAlign:'center'
        }
        const buttonStyle={
            backgroundColor:this.state.buttonBgColor,
            color:this.state.buttonTextColor,
            padding:'7.5px 20px',
            fontFamily:'Montserrat',
            fontSize:'16px',
            fontWeight:'700',
            transition:this.state.transition,
            cursor:'pointer'
        }
        const bottomStyle={
            height:this.state.bottomHeight,
            transition:this.state.transition,
            fontFamily:'Source Sans Pro',
            color:this.state.bottomTextColor,
            lineHeight:2,
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-end',
            paddingRight:'25px',
            backgroundColor:this.state.bottomBgColor
        }
        const toggleStyle={
            height:'20px',
            width:'20%',
            borderRadius:'10px',
            backgroundColor:this.state.toggleBgColor,
            color:this.state.toggleColor,
            fontFamily:'Montserrat',
            fontWeight:'700',
            cursor:'pointer',
            transition:this.state.transition
        }
        return (
            <div onMouseEnter={()=>{
                this.setState({
                    transform:'scale(1.1)'
                })
            }} 
            onMouseLeave={()=>{
                this.setState({
                    transform:''
                })
            }}
            style={cardStyle}>
                <div style={topStyle}>
        <h2 style={{margin:'0'}}>{this.state.plan}</h2>
        <div onClick={()=>{
            if(!this.state.toggleActive){
                this.setState({
                    toggleSetting:'Y',
                    price:12*this.props.price,
                    toggleActive:true,
                    toggleBgColor:this.props.toggleColor,
                    toggleColor:this.props.toggleBgColor,
                    billingCycle:'year'
                })
            }
            else{
                this.setState({
                    toggleSetting:'M',
                    price:this.props.price,
                    toggleActive:false,
                    toggleBgColor:this.props.toggleBgColor,
                    toggleColor:this.props.toggleColor,
                    billingCycle:'month'
                })
            }
        }} style={toggleStyle}>{this.state.toggleSetting}</div>
                    <h3 style={{margin:'0', color:this.state.priceColor,transition:this.state.transition}}>{`$${this.state.price}`}<br/>/{this.state.billingCycle}</h3>
                    <div onMouseEnter={()=>{
                        this.setState({
                            bottomBgColor:'#b162d1',
                            bottomTextColor:'white',
                            buttonBgColor:'white',
                            buttonTextColor:'#b162d1',
                            bottomHeight:'63%',
                            priceColor:'green'
                        })
                    }}
                    onMouseLeave={()=>{
                        this.setState({
                            bottomBgColor:'#ffffff',
                            bottomTextColor:'black',
                            buttonBgColor:'#b162d1',
                            buttonTextColor:'white',
                            bottomHeight:'0%',
                            priceColor:'black'
                        })
                    }}
                    onClick={()=>{
                        this.setState({
                            bottomBgColor:'#b162d1',
                            bottomTextColor:'white',
                            buttonBgColor:'white',
                            buttonTextColor:'#b162d1',
                            bottomHeight:'63%',
                            priceColor:'green'
                        })
                    }}
                    style={buttonStyle}>Get Started</div>
                </div>
                <div style={bottomStyle}>
                    {this.state.features}
                </div>
            </div>
        )
    }
}

export default PricingCard
