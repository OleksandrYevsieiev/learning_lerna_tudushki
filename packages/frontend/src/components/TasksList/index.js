import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../../actions/todoActionCreators';

function TasksListItem(props) {
  const { task: t } = props;

  return (
    <li key={t.id}>
      {t.data}
      <input type='checkbox' checked={t.isDone} />
    </li>
  );
}

const TasksList = () => {
  const { tasks, isFetching, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { getTasks } = bindActionCreators(todoActionCreators, dispatch);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ul>
      {tasks.map((t) => (
        <TasksListItem task={t} />
      ))}
      {isFetching && <li>Loading...</li>}
      {error && <li>ERROR</li>}
    </ul>
  );
};

export default TasksList;