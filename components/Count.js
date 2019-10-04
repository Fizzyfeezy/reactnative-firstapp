import React, { Component } from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';

class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    incrementCount = () => {
        this.setState (prevState => (
            { 
                count: prevState.count + 1 
            })
        )
    }
     
  render() {
    return (
        <TouchableWithoutFeedback onPress={this.incrementCount}>
            <View>
                <Text>{this.state.count}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
  }
}

export default Count;
