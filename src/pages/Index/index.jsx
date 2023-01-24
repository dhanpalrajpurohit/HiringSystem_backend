import React from 'react';
import './index.css';

import { Trash2Fill, SendFill, PlusCircleFill } from 'react-bootstrap-icons';
import List from '../../component/list/List';
import Header from '../../component/header/Header';


function Index() {
  let [showInputText, setShowInputText] = React.useState(false);
  const [todoList, setTodoList] = React.useState([]);
  let [value, setValue] = React.useState();

  let newDate = new Date();
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDay() + 1;
  let year = newDate.getFullYear()

  const handleClick = () => {
    const id = todoList.length + 1;
    if(value!=""){
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: value,
          complete: false,
        }
      ]);
    }
    setValue("");
  };

  const handleComplete = (id) => {
    const list = todoList.filter((task) => task.id !== id);
    setTodoList(list);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-white mx-auto m-3">
            <div className="container">
              <div class="card mx-auto" style={{ width: "30rem" }}>
                <div class="card-body">
                  <h5 class="card-header">{weekdays[day]}</h5>
                  <h6 className='text-muted text-center'>{monthlist[month]} {date}, {year} </h6>
                  <div className='p-3'>
                    <ul className='list-group'>
                      {todoList.map((todo, index) => {
                        return (
                          <li key={index}>
                            <div id="social-icons" className='d-flex flex-row'>
                              <h6 class="card-subtitle border-0 mb-2 text-primary text-dark list-group-item w-100">{todo.task}</h6>
                              <div className="mx-1"><button className='btn justify-content-right' onClick={() => handleComplete(todo.id)}><Trash2Fill /></button></div>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                    {showInputText && <div className='d-flex flex-row input-group p-2 mt-2 border border-1 rounded'>
                      <input type="text" value={value} class="card-subtitle border border-0 mb-2 form-control text-dark list-group-item" placeholder='Enter Text Here..' onChange={(e) => setValue(e.target.value)} />
                      <div className="mx-1"><button className='btn justify-content-right input-group-text text-primary p-1' onClick={() => handleClick()}><SendFill /></button></div>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
            {!showInputText && <div class="text-center btn-center">
              <button type="button" class="btn btn-primary  btn-lg rounded-circle" onClick={() => setShowInputText(true)}><b>+</b></button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
