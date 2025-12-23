'use client';

import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
}

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo: TodoItem = { id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 w-64 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Add a new todo..."
        />
        <button
          onClick={addTodo}
          className="px-8 rounded-r-lg bg-blue-500 text-white font-bold p-2 uppercase border-blue-500 border-t border-b border-r"
        >
          Add
        </button>
      </div>
      <div className="w-72">
        {todos.map((todo) => (
          <div key={todo.id} className="flex justify-between items-center bg-white px-4 py-2 my-2 shadow">
            <span className="text-gray-800">{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 transition-colors duration-150"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}