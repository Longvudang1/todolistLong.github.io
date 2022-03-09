import './App.css';
import { Fragment, useEffect, useState } from 'react';
import AddTask from './Users/AddTask';
import UserList from './Users/UserList';
import ListDone from './Users/ListDone'
import Button from './UI/Button';
import classes from './UI/Button.module.css'

function App() {
  const [editedList,setEditedList] = useState('')
  const [taskList,setTaskList] = useState([]);
  const [taskListDone,setTaskListDone] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const [order,setOrder] = useState('ASC');
  const addTaskHandler =(mtask) => {
    setTaskList((prevTask) => {
      return [
        ...prevTask,
        {task:mtask,id:Math.random().toString()}
      ]
    })
    // const newTodos = [...taskList, { task:mtask,id:Math.random().toString() }];
    // setTaskList(newTodos);
  };

  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem('todo'))

    if(getTodo) {
      setTaskList(getTodo)
    }
  },[])

  
  useEffect(() => {
    const getDone = JSON.parse(localStorage.getItem('donetask'))
    // console.log(getDone)
    if(getDone) {
      setTaskListDone(getDone)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('donetask',JSON.stringify(taskListDone))
  },[taskListDone])


  useEffect(() => {
    localStorage.setItem('todo',JSON.stringify(taskList))
  },[taskList])
  // const deleteTaskHandler = (id) => {
  //   const arrayDelete= taskList.filter(delete1 => delete1.id === id);
  //   console.log(arrayDelete)
  //   setTaskList(arrayDelete);
  // }
  const deleteLocal = () => {
    // eslint-disable-next-line
    const a = window.localStorage.removeItem('donetask'); 
    setTaskListDone([]);
  }

  const deleteTaskHandler = (index) => {
    const newToDo = [...taskList];
    // console.log(newToDo)
    const deletedTodo = newToDo[index] 
    const newDoneTaskArray = [...taskListDone,deletedTodo]
    setTaskListDone(newDoneTaskArray)
    newToDo.splice(index,1);
    setTaskList(newToDo);
    return newToDo;
  }
  const editTaskHandler = (index) => {
    let newEditItem = taskList.find((ele,index1) => {
      return index1 === index
    });
    // console.log(newEditItem);
    setEditedList(newEditItem);
  };
  const sorting = () => {
    if(order === 'ASC') { 
      const sort = [...taskList].sort((a, b)=> a['task'].toLowerCase() > b['task'].toLowerCase() ? 1 : -1);
      setTaskList(sort);
      setOrder('ASC');
      // console.log(sort)
  
    }

    
  };
  return (
    
    
    <Fragment>
      <section className='container'>
        <div className="heading">
          <img className="heading__img" src="https://freesvg.org/img/publicdomainq-business-man-working.png" alt='hello'></img>
          
          <h1 className="heading__title">To-Do List</h1>
        </div>
        
        <div>
          <AddTask onAddTask={addTaskHandler} edited={editedList} edited1={setEditedList}  setTaskList={setTaskList} taskList={taskList}></AddTask>
          <label className="form__label" htmlFor="todo" >~ Today I need to ~</label>
          {/* <Button onClick={() => sorting()}>Sorting</Button> */}
          <b>Search    </b>
          <input type='text' placeholder='search' onChange={event => {setSearchTerm(event.target.value);
          }}></input>
          <div> <Button onClick={() => sorting()} className={classes.button} >Sorting(ASC)</Button> </div>
            <div id='wrap'>
              <div id='first' >
                <b id='test1'>Todo List</b>

                <UserList  users={taskList.filter((val) =>{
                  
                  if(searchTerm === ''){
                    return true
                  }else if(val.task.includes(searchTerm.toLowerCase())){
                    return true
                    
                  }else{
                    return false
                  }
                
                })} onDeleteTask ={deleteTaskHandler}  onUpdateTask = {editTaskHandler} onSorting = {sorting} ></UserList>
                
              </div>
              <div id='first'> 
                <b id='test1'>Task Done</b>
                <ListDone id = 'narrow' users={taskListDone} ></ListDone>
                <Button onClick={deleteLocal}>Clear task</Button>
              </div>
            </div>
            
            
        </div>
          
        
      </section>    
    </Fragment>
  );
}

export default App;
