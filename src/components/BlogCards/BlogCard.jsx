import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const BlogCard = () => {
    const [blogs, setBlog] = useState([])
    const [bookmark, setBookmark]= useState("")
    const [markRead, setMarkRead]= useState("")
    const handleMarkRead =()=>{

    }
    const handleBookmark =()=>{

    }



    useEffect(()=>{
       fetch("api.json")
       .then(res=>res.json())
       .then(data=>setBlog(data))
    },[])

    return (
        <div className='lg:flex md:flex lg:mx-12 lg:my-8 gap-4 mx-2 my-4'>
            <div className='blogs w-full flex flex-col gap-4 basis-5/6'>
                {
                    blogs.map(blog=> <SingleCard blog={blog} key={blog.id} ></SingleCard>)
                }
            </div>
            <div className='lg:sticky bg-success w-full  basis-1/4 h-96'>
                {/* sidebar */}
                <h1>hi</h1>
            </div>

        </div>
    );
};

export default BlogCard;