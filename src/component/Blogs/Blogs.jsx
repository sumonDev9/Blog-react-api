import { useEffect } from "react";
import { useState } from "react";
 import Blog from "../Blog/Blog";
 import PropTypes from 'prop-types';

const Blogs = ({handleAddtoBookmark, handleMarkAsRead}) => {
    const [blogs, SetBlogs] = useState([]);

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => SetBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs {blogs.length}</h1>
            {
                 blogs.map(blog => <Blog
                     key={blog.id}
                     handleAddtoBookmark={handleAddtoBookmark} 
                     handleMarkAsRead={handleMarkAsRead}
                      blog={blog}>
                       </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddtoBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;