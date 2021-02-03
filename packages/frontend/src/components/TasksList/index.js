import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../../actions/todoActionCreators';

const TasksListItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { tasks: { id, data, isDone } } = props;

  return (
    <li key={id}>
      {data}
      <input type='checkbox' checked={isDone} />
    </li>
  );
};

const TasksList = () => {
  const { tasks, isFetching, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const { getTasks } = bindActionCreators(todoActionCreators, dispatch);

  useEffect(() => {
    getTasks({ page: 1, results: 10 });
  }, []);

  return (
    <ul>
      {tasks.map((t) => (
        // eslint-disable-next-line react/jsx-key
        <TasksListItem task={t} />
      ))}
     {isFetching && <li>Loading...</li>}
     {error && <li>ERROR</li>}
    </ul>
  );
};

export default TasksList;
