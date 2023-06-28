import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Новая задача
      </Button>
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">Все</option>
        <option value="incomplete">В процессе</option>
        <option value="complete">Завершенные</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;