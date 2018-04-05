import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div style={{ position: 'absolute', bottom: 5, right: 5, left: 5, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant={'fab'} color={'primary'} onClick={() => window.changeColor('0x' + Math.random().toString(16).slice(2, 8))}>
                        <Icon>brush</Icon>
                    </Button>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
