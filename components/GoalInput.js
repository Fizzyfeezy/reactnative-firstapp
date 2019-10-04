import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

function GoalInput(props) {
    const {onAddGoal, visible, onCancel} = props
    const [enteredGoal, setEnteredGoal] = useState('');
  
    const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
    }
    const addGoalHandler = () => {
        if (enteredGoal === '') {
            onAddGoal(onCancel);
        }
        else{
            onAddGoal(enteredGoal);
        }
        setEnteredGoal('');
    }

    return (
        <Modal visible = {visible} animationType = "slide" transparent = {true}>
            <View style={styles.Inputcontainer}>
                <TextInput placeholder = "Course goal" style = {styles.input} 
                    onChangeText = {goalInputHandler} value = {enteredGoal}/>
                <View style = {styles.buttonContainer}>
                    <View style = {styles.buttonCancel}>
                        <Button title = "CANCEL" color = "white" onPress = {onCancel}/>
                    </View>
                    <View style = {styles.buttonAdd}>
                        <Button title = 'ADD' onPress = {addGoalHandler} color = "white" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    Inputcontainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : 'white',
      height : '40%',
      width : '90%',
      marginLeft : 20,
      marginTop : 200
    },
    input : {
      borderColor : 'black',
      padding : 10,
      borderWidth : 1,
      width : '80%',
      marginBottom : 10
    },
    buttonContainer : {
        flexDirection: 'row',
        justifyContent : 'space-around',
        width : '60%',
        marginTop : 20
    },
    buttonAdd : {
        width : '40%',
        backgroundColor : 'blue',
        borderRadius : 5
    },
    buttonCancel : {
        width : '40%',
        backgroundColor : 'red',
        borderRadius : 5
    }
  });

export default GoalInput
