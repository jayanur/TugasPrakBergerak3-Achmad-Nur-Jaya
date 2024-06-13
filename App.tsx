import React, { useState } from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text, 
  TextInput, 
  Image, 
  Button, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    setText('');
    setTodos([{ id: todos.length, text }, ...todos]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.Center}>
          <Text style={styles.title}>Tugas</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.Center}>
          <Image
            style={styles.image}
            source={{ uri: 'data:image/png;base64,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' }}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="ketik disini"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTodo}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.section}>
          <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.todoItem}>
                <Text style={styles.item}>{item.text}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteTodo(item.id)}
                >
                  <Text style={styles.deleteButtonText}>Hapus Disini</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  item: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
