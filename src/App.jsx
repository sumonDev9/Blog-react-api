import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
 // books mark add
 const [bookmark, setBookmark] = useState([]);

 // readingtime
 const [readingtime, setReadingtime] = useState(0);

 // add to click bookmark
 const handleAddtoBookmark = blog =>{
  const newBookmarks = [...bookmark, blog];
  setBookmark(newBookmarks);
 }

 // add to click readingtime
 const handleMarkAsRead = time => {
 // console.log('mark as read', time)

  setReadingtime(readingtime + time);

 }
  return (
    <>
      <Header></Header>
      <div className='md:flex w-11/12 mx-auto gap-3 my-5'>
      <Blogs 
      handleAddtoBookmark={handleAddtoBookmark}
      handleMarkAsRead={handleMarkAsRead}
      >

      </Blogs>
      <Bookmarks bookmark={bookmark} readingtime={readingtime}></Bookmarks>
      </div>
     
  
    </>
  )
}

export default App
