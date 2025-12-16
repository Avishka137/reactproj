import React from 'react'
import TopicBox from '../components/TopicBox'
import Contents from '../components/contents'  

export default function Home() {
  return (
    <div>
        <TopicBox js = 'React JS'> 
          <p>This is the today's topic</p>
        </TopicBox>
        <TopicBox js = 'Node JS'>
          <p>This is the next topic</p>
        </TopicBox>
        <TopicBox js = 'Express JS'>
          <p>This is the final topic</p >
        </TopicBox>
        <Contents/> 
    </div>
  )
}