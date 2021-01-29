import React from 'react';
import TaskForm from '../components/TaskForm';
import TasksList from '../components/TasksList';

export default function Todo() {
  return (
    <div>
      <TaskForm />
      <TasksList />
    </div>
  );
}
