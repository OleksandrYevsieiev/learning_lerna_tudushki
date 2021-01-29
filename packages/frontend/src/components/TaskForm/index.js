import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../../actions/todoActionCreators';

const TaskForm = () => {
  const dispatch = useDispatch();
  const { createTask } = bindActionCreators(todoActionCreators, dispatch);

  return (
    <Formik
      initialValues={{
        data: 'New Task ',
        isDone: false,
      }}
      onSubmit={(values) => createTask(values)}>
      {(formik) => (
        <Form>
          <Field name='data' />
          <button type='submit'>Create task</button>
          <button type='reset'>Reset</button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
