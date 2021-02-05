import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../../actions/todoActionCreators';
import styles from './../TasksList/TaskList.module.css';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

const TasksListItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { task: { id, data, isDone } } = props;
  const iconProps = {
    /* this is to avoid the following error:
    Type '{ className: string; path: string; size: number; onClick: any; }'
    is not assignable to type 'IntrinsicAttributes & IconProps & { children?: ReactNode; }'. */

    className: styles.icon,
    path: mdiDelete,
    size: 1,
  };
  return (

    <div className={styles.task} key={id}>
      <div className={styles.text}>{data}</div>
      <input type='checkbox' checked={isDone} onChange={()=>{}}/>
      <Icon {...iconProps} />
    </div>

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
    <div className={styles.tasksContainer}>
      {tasks.map((t) => (
        // eslint-disable-next-line react/jsx-key
        <TasksListItem key={t.id} task={t} />
      ))}
     {isFetching && <li>Loading...</li>}
     {error && <li>ERROR</li>}
    </div>
  );
};

export default TasksList;
