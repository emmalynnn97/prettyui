import React, { Component } from 'react'

export class HomeBanner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             heading:this.props.heading,
             copy:this.props.copy
        }
    }
    
    render() {
        const homeBannerStyle={
            height:'25%',
            width:'100%',
            margin:'25px',
            boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`,
            padding:'15px'
          }
          const homeBannerHeadingStyle={
            fontFamily:'Montserrat',
            color:'#b162d1'
          }
          const homeBannerCopyStyle = {
            fontFamily:'Source Sans Pro',
            fontSize:'18px',
            lineHeight:2
          }
        return (
            <div style={homeBannerStyle}>
            <h1 style={homeBannerHeadingStyle}>
             {this.state.heading}
            </h1>
            <hr style={{borderTop:'3px dotted #b162d1'}}/>
        <p style={homeBannerCopyStyle}>{this.state.copy}</p>
         </div>
        )
    }
}

export default HomeBanner
