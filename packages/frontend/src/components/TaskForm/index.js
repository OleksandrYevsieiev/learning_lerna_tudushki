import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../../actions/todoActionCreators';
import styles from './TaskForm.module.css';

const TaskForm = () => {
  const dispatch = useDispatch();
  const { createTaskAction } = bindActionCreators(todoActionCreators, dispatch);

  return (
    <Formik
      initialValues={{
        data: '',
        isDone: false
      }}
      onSubmit={(values) => createTaskAction(values)}>
      {(formik) => (
        <Form className={styles.container}>
          <Field className={styles.input} name='data' placeholder='Write your task here...'/>
          <button className={styles.add} type='submit'>Create task</button>
          <button className={styles.add} type='reset'>Reset</button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
