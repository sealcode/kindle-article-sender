import React from 'react'

export class NavBar extends React.Component {
    render() {
        return(
            <div>
                <div style={{background: '#444', height: '60px'}}>
                
                </div>
                {this.props.children}
            </div>
        );
    }
}