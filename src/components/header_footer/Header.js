import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


import SideDrawer from './SideDrawer'


class Header extends Component {
    
    state = {
        openDrawer : false,
        headerShow: false
    }
    toggleDrawer = (value) => {
        this.setState({
            openDrawer: value
    })
}
    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
        if(window.scrollY > 0 ){
            this.setState({headerShow: true})
        }
        else {
            this.setState({headerShow: false})
        }
    }
    render() {
        return (
           <AppBar
            position="fixed" 
            style={{backgroundColor: this.state.headerShow ?'#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'}}
                >
                    <Toolbar>
                        <div className="header_logo">
                            <div className="font_righteous header_logo_venue">The Venue</div>
                            <div className="font_roboto header_logo_title">Musical Events</div>
                        </div>
                            <IconButton 
                            arial-label="Menu" 
                            color="inherit" onClick = {()=> this.toggleDrawer(true)}>
                                <MenuIcon/> 

                                
                            </IconButton>
                            
                        <SideDrawer
                            open={this.state.openDrawer}
                            onClose={(value)=> this.toggleDrawer(value)}
                        />
                        </Toolbar>
               </AppBar>       
        );
    }
}

export default Header;