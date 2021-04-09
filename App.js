import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoItem title="클래스101 커리큘럼 만들기" done={true} />
      <TodoItem title="운전면허 도로주행 연수" done={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
