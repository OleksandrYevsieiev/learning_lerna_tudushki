import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../../actions/todoActionCreators';
import styles from './TaskItem.module.css';

const TasksListItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { task: { id, data, isDone } } = props;
  const dispatch = useDispatch();
  const { removeTaskAction } = bindActionCreators(todoActionCreators, dispatch);

  return (
    <div className={styles.task} key={id}>
      <input type='checkbox' checked={isDone} onChange={()=>{}}/>
      <div className={styles.text}>{data}</div>
      <button className={styles.removeButton} onClick={() => removeTaskAction(id)}>Delete</button>
    </div>
  );
};

export default TasksListItem;