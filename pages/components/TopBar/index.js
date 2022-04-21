import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Image from 'next/image'
import examplePic from '../../images/example.png'
import { Container } from './styledComponent'

export default function TopBar() {
  const [value, setValue] = useState("");
  const API_KEY = 'AIzaSyBw-j-NF4SJRLKE8lE2xg0-glRftYYJ5Sg'
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    Searching(value);
    setValue("");
  };
  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${value}&key=${API_KEY}`,
    headers: { }
  };
  
  const Searching = () => {
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
