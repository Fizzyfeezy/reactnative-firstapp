import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function GoalItem(props) {
    const {title, onDelete, id} = props;
    return (
        <TouchableOpacity activeOpacity = {0.3} onPress = {onDelete.bind(this, id)}>
            <View style = {styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem : {
      padding : 10,
      backgroundColor : '#ccc',
      borderColor : 'black',
      borderWidth : 1,
      marginVertical : 10
    }
  });

export default GoalItem
