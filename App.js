import React, {useState} from 'react';
import Goals from './components/Goals';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
// import GoalItem from './components/GoalItem';

export default function App() {

  return (
      <View style = {styles.screen}>
        <Goals />
      </View>
  );

}

const styles = StyleSheet.create({
  screen : {
    padding : 50,
    backgroundColor : '#E8E2E2',
    flex : 1
  }
});