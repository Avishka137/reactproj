import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
  return (
    <div> 
        <div className='topicBox'>
            <p className='txt'> One is {props.js} </p>
            {props.children}
        </div>
    </div>
  )
}
