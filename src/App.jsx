

import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'
import Header from './components/header/Header'

import { useState } from 'react'

function App() {
const [bookmarks ,setBookmarks]=useState([])
const [readingTime ,setReadingTime]=useState(0)

const handleAddToBookMark = blog =>{
 const newBookmarks=[...bookmarks, blog]
 setBookmarks(newBookmarks)
}
const handleMarkRead=(time,id)=>{
  const newTime=(readingTime +time)
  setReadingTime(newTime)
  // remove the read book from bookmark
const remaining= bookmarks.filter(bookmark=>bookmark.id !==id)
setBookmarks(remaining)
}


  return (
    <>
     <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookMark={handleAddToBookMark}
       handleMarkRead={handleMarkRead}
      ></Blogs>
      <BookMarks bookmarks={bookmarks}
      readingTime={readingTime}
      
      ></BookMarks>
    </div>
    
    </>
  )
}


export default App
