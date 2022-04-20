import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import examplePic from '../../images/example.png'
import icon from '../../images/searching.png'
import { Container } from './styledComponent'

export default function TopBar() {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  useEffect(() => {
    // dispatch(getEmployeeDepartmentRequest())
  }, [])

  const addTodo = title => {
    // dispatch(addTodoListRequest({title, completed: false}))
  };

  return (
    <Container>
      <div className='head-container'>
        <div className="logo-container">
          <Image
            src={examplePic}
            alt=""
            width={120}
            height={120}
        />
        </div>
        <div className='title'>Website Name</div>
      </div>
      <div className='tail-container'>
        <div className='search-container'>
          <div>Search</div>
          <form onSubmit={handleSubmit}>
          <div className="input-icons">
          <input 
            className="input-field" 
            type="text" 
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Search"
          />
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}
