import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const colors = [
    'ff0000',
    '0000ff',
    '8800ff',
    '00ff00',
    'ffff00'
];

class App extends Component {
    state = {
        colorPickerVisible: false,
    };

    handleColorPick(code) {
        window.changeColor('0x' + code);
    };

    render() {
        return (
            <MuiThemeProvider>
                <div style={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        {this.state.colorPickerVisible &&
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {colors.map(color => {
                                return <div key={color} style={{ marginBottom: 16, width: 40, height: 40 }}>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            border: '2px solid #ffffff',
                                            borderRadius: 40,
                                            backgroundColor: '#' + color,
                                            filter: 'brightness(60%)'
                                        }}
                                        onClick={() => this.handleColorPick(color)}
                                    />
                                </div>
                            })}
                        </div>
                        }
                        <Button variant={'fab'} color={'primary'}
                                onClick={() => this.setState({ colorPickerVisible: !this.state.colorPickerVisible })}>
                            <Icon>{ this.state.colorPickerVisible ? 'close' : 'brush' }</Icon>
                        </Button>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
