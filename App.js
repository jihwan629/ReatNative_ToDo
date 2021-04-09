import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'
import { render } from 'react-dom';

export default class App extends React.Component {
  state = {
    todos: [{
      title: '클래스101 커리큘럼 만들기',
      done: true,
    },
    {
      title: '운전면허 도로주행 연수',
      done: false,
    }],
    showModal: false,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <Header 
          show={() => {
            this.setState({ showModal: true })
          }}
        />

        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => {
            return (
              <TodoItem
                title={item.title}
                done={item.done}
              />
            )
          }}
          keyExtractor={(_, index) => {
            return `${index}`
          }}
        />
        
        <TaskModal 
          isVisible={this.state.showModal} 
          add={(title) => {
            this.setState({
              todos: this.state.todos.concat({
                title: title,
                done: false,
              }),
              showModal: false,
            })
          }}
          hide={() => {
            this.setState({ showModal: false })
          }}
        />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
