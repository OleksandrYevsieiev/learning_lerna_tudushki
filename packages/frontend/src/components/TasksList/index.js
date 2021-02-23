import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../../actions/todoActionCreators';
import styles from './TaskList.module.css';
import TasksListItem from './../TaskItem';

const TasksList = () => {
  const { tasks, isFetching, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const { getTasksAction } = bindActionCreators(todoActionCreators, dispatch);

  useEffect(() => {
    getTasksAction({ page: 1, results: 10 });
  }, []);

  return (
    <div className={styles.tasksContainer}>
      {tasks && tasks.map((task) => (
        // eslint-disable-next-line react/jsx-key
        <TasksListItem key={task.id} task={task} />
      ))}
     {isFetching && <li>Loading...</li>}
     {error && <li>ERROR</li>}
    </div>
  );
};

export default TasksList;
