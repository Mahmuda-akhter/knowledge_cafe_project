
import { useState } from 'react'
import { useEffect } from 'react'
import Blog from '../blog/Blog';




const Blogs = ({handleAddToBookMark,handleMarkRead}) => {
    const [blogs ,setBlogs]=useState([])

useEffect(()=>{
  fetch('blog.json')
  .then(res=> res.json())
  .then(data=>setBlogs(data))
},[])
    return (
        <div className=" md:w-2/3">
            <h1 className="text-4xl m-2 font-bold text-gray-500">blogs :{blogs.length}</h1>
            <div>
                {
                    blogs.map(blog=><Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookMark={handleAddToBookMark}
                    handleMarkRead={handleMarkRead}
                    
                    ></Blog>)
                }
            </div>
        </div>
    );
};


export default Blogs;