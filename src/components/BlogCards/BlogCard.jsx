import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleCard from '../SingleCard/SingleCard';
import Swal from 'sweetalert2'
import Blog from '../Blog/Blog';
const BlogCard = () => {
    const [blogs, setBlog] = useState([])
    const [bookmark, setBookmark] = useState([])
    const [markRead, setMarkRead] = useState(0)
    const handleMarkRead = (read_time) => {
        const newMarkRead = markRead + read_time
        setMarkRead(newMarkRead)
    }

    const showAlert = (n) => {
        const message = 'You already bookmarked this item '+ n + " times before." 
        Swal.fire({
                title: "Bookmark Alert",
                text: message,
                icon: "warning",
                confirmButtonText: "OK",
            });
    }

    const handleBookmark = (blog_title) => {
        const bookmarkedSame = bookmark.filter(item=>blog_title==item)
        const previousBookmarkCount = bookmarkedSame.length
        if(previousBookmarkCount){
            showAlert(previousBookmarkCount)
        }
        const newBookmark = [blog_title]
        setBookmark([...bookmark, newBookmark])
    }
    useEffect(() => {
        fetch("api.json")
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div className='lg:flex md:flex lg:mx-12 lg:my-8 gap-4 mx-2 my-4'>
            <div className='blogs w-full flex flex-col gap-4 basis-5/6'>
                {
                    blogs.map(blog => <SingleCard blog={blog} key={blog.id} bookmark={handleBookmark} markRead={handleMarkRead}></SingleCard>)
                }
                <Blog></Blog>
            </div>
            <div className='w-full  basis-1/4 h-96'>
                {/* sidebar */}
                <Sidebar bookmark={bookmark} markRead={markRead} ></Sidebar>
            </div>

        </div>
    );
};

export default BlogCard;