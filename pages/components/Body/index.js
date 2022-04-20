import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import examplePic from '../../images/example.png'
import { Container } from './styledComponent'

export default function Body() {
  return (
    <Container>
      <div className='content-container'>
        <div className="logo-container">
          <Image
            src={examplePic}
            alt="Landscape picture"
            width={200}
            height={200}
        />
      </div>
        <div className='sub-content-container'>
          <div className='title'>Title 1</div>
          <div className='sub-title'>Some default text to fill some space, and something more so there is more text</div>
          <div className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc ut nisi placerat rutrum eu id diam. Praesent lobortis quam neque, a ultricies ante blandit in. Morbi purus turpis, lobortis et libero et, viverra tristique nisi. Etiam bibendum neque vel nisl elementum iaculis. Etiam volutpat nec felis sit amet maximus. Curabitur fermentum condimentum tincidunt. Nunc facilisis eu nisl ut cursus. Donec luctus molestie ante. Donec eleifend arcu ullamcorper velit fringilla, malesuada hendrerit felis fermentum. Morbi dapibus, magna non dictum efficitur, lectus ligula posuere est, sed dapibus felis ligula sit amet elit. Mauris felis est, varius at condimentum sed, ultricies id elit. Vestibulum massa lectus, gravida a pharetra sed, sodales sed nisl. Ut sit amet tellus libero. Suspendisse ante odio, faucibus sit amet neque consequat, feugiat congue tortor. Phasellus sollicitudin auctor lectus, quis efficitur mi ullamcorper eu. Vestibulum cursus ante aliquet, mollis odio ut, convallis tellus.</div>
        </div>
      </div>
      <div className='content-container'>
        <div className="logo-container">
          <Image
            src={examplePic}
            alt="Landscape picture"
            width={200}
            height={200}
        />
      </div>
        <div className='sub-content-container'>
          <div className='title'>Title 2</div>
          <div className='sub-title'>Some default text to fill some space, and something more so there is more text</div>
          <div className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc ut nisi placerat rutrum eu id diam. Praesent lobortis quam neque, a ultricies ante blandit in. Morbi purus turpis, lobortis et libero et, viverra tristique nisi. Etiam bibendum neque vel nisl elementum iaculis. Etiam volutpat nec felis sit amet maximus. Curabitur fermentum condimentum tincidunt. Nunc facilisis eu nisl ut cursus. Donec luctus molestie ante. Donec eleifend arcu ullamcorper velit fringilla, malesuada hendrerit felis fermentum. Morbi dapibus, magna non dictum efficitur, lectus ligula posuere est, sed dapibus felis ligula sit amet elit. Mauris felis est, varius at condimentum sed, ultricies id elit. Vestibulum massa lectus, gravida a pharetra sed, sodales sed nisl. Ut sit amet tellus libero. Suspendisse ante odio, faucibus sit amet neque consequat, feugiat congue tortor. Phasellus sollicitudin auctor lectus, quis efficitur mi ullamcorper eu. Vestibulum cursus ante aliquet, mollis odio ut, convallis tellus.</div>
        </div>
      </div>
      <div className='content-container'>
        <div className="logo-container">
          <Image
            src={examplePic}
            alt="Landscape picture"
            width={200}
            height={200}
        />
      </div>
        <div className='sub-content-container'>
          <div className='title'>Title 3</div>
          <div className='sub-title'>Some default text to fill some space, and something more so there is more text</div>
          <div className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc ut nisi placerat rutrum eu id diam. Praesent lobortis quam neque, a ultricies ante blandit in. Morbi purus turpis, lobortis et libero et, viverra tristique nisi. Etiam bibendum neque vel nisl elementum iaculis. Etiam volutpat nec felis sit amet maximus. Curabitur fermentum condimentum tincidunt. Nunc facilisis eu nisl ut cursus. Donec luctus molestie ante. Donec eleifend arcu ullamcorper velit fringilla, malesuada hendrerit felis fermentum. Morbi dapibus, magna non dictum efficitur, lectus ligula posuere est, sed dapibus felis ligula sit amet elit. Mauris felis est, varius at condimentum sed, ultricies id elit. Vestibulum massa lectus, gravida a pharetra sed, sodales sed nisl. Ut sit amet tellus libero. Suspendisse ante odio, faucibus sit amet neque consequat, feugiat congue tortor. Phasellus sollicitudin auctor lectus, quis efficitur mi ullamcorper eu. Vestibulum cursus ante aliquet, mollis odio ut, convallis tellus.</div>
        </div>
      </div>
    </Container>
  )
}
