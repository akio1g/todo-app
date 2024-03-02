import React, { useReducer, useState } from 'react'
import { AddContainer, Board, BoardContent, BoardContentQuantity, BoardContentText, ButtonShow, ToDoContainer, TodoItem, TodoList } from './ToDo.styles'
import { FormControlLabel, IconButton, InputAdornment, Radio, Slide, TextField } from '@mui/material'
import { Add, Category } from '@mui/icons-material'
import Todo from '../../classes/Todo'
import Task from '../../classes/Task'
const currentTodo = new Todo({
  title: "Test Todo", tasks: [
    new Task({ id: 0, description: "Task 1" }),
    new Task({ id: 1, description: "Task 2" }),
    new Task({ id: 2, description: "Task 3" }),
  ]
});
const ToDo = () => {

  const [newTask, setNewTask] = useState(new Task({}));

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  function handleChange(e) {
    setNewTask(prevTask => new Task({...prevTask, description: e.target.value}));
  }

  function confirmTask() {
    currentTodo.addTask(newTask);
    forceUpdate();
    setNewTask(new Task({}));
  }

  function setAsCompleted(task = new Task()) {
    task.setAsCompleted();
    forceUpdate();

    setTimeout(() => {
      task.setHide();forceUpdate();}, 1000);
  }

  return (
    <ToDoContainer>
      <h1>{currentTodo.title}</h1>
      <Board>
        <BoardContent>
          <BoardContentQuantity>{currentTodo.getCompletedTasks()}</BoardContentQuantity>
          <BoardContentText>Tasks Completed</BoardContentText>
        </BoardContent>
      </Board>
      <AddContainer>
        <TextField
          label="Add a Task Here"
          style={{ flex: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Add />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => console.log('open select category')}>
                  <Category />
                </IconButton>
              </InputAdornment>
            )
          }}
          value={newTask.description}
          onChange={handleChange}
          onKeyDown={e => {
            if(e.key === "Enter") confirmTask();
          }}
          placeholder='Type Here'
          variant="outlined"
          color='secondary'
        />
      </AddContainer>

      <TodoList>
        {currentTodo.tasks.map((task, index) => (
          <Slide direction="up" in={!task.shouldHide} mountOnEnter unmountOnExit>
            <TodoItem key={index}>
              <FormControlLabel 
                value="end" 
                style={{ marginLeft: 0, width: '100%' }} 
                control={<Radio color='secondary' checked={task.isCompleted}/>} 
                label={task.description} 
                onClick={() => setAsCompleted(task)}
              />
            </TodoItem>
          </Slide>
          
        ))}
      </TodoList>

      <ButtonShow>Show Completed Tasks</ButtonShow>
    </ToDoContainer>
  )
}

export default ToDo