import React, {useState} from 'react';
import {StyleSheet, Button, View, FlatList, Text} from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

function Goals() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    const [countGoals, setCountGoals] = useState(0);
  
    const addGoalhandler = (goalTitle) => {
      //console.log(enteredGoal);
        setCourseGoals(currentGoals => [...currentGoals, 
            {id : Math.random().toString(), value : goalTitle }]);
            setCountGoals(countGoals + 1);
            setIsAddMode(false);
    }

    const removeGoalHandler = (goalId) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter(goal => {
                return goal.id !== goalId
            });
        });
        setCountGoals(countGoals - 1);
    }
    const onCancelButtonHandler = () => {
        setIsAddMode(false);
    }

    return (
        <View style = {styles.screen}>
            <View style = {styles.buttonGoal}>
                <Button title = "Add New Goal" onPress = {() => setIsAddMode(true)} color = "white"/>
            </View>
            <View>
                <Text>{countGoals}</Text>
            </View>
            <GoalInput visible = {isAddMode} onAddGoal = {addGoalhandler} 
                onCancel = {onCancelButtonHandler} 
            />
            <FlatList keyExtractor = {(item, index) => item.id } data = {courseGoals}
                renderItem = {itemData => (
                <GoalItem id = {itemData.item.id} onDelete = {removeGoalHandler}
                 title = {itemData.item.value}/>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    buttonGoal : {
        width : '100%',
        backgroundColor : 'black',
        borderRadius : 5,
        marginTop : 30
    }
  });

export default Goals;
