import React from 'react';
import TaskForm from '../components/TaskForm';
import TasksList from '../components/TasksList';
import Header from '../components/Header';
import styles from './Todo.module.css'

export default function Todo () {
  return (
    <div className={styles.container}>
      <Header/>
      <TaskForm />
      <TasksList />
    </div>
  );
}
