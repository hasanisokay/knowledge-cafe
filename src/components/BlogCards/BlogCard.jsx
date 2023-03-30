import React, { useEffect, useState } from 'react';

const BlogCard = () => {
    const [blog, setBlog] = useState([])
    useEffect(()=>{
       fetch("api.json")
       .then(res=>res.json())
       .then(data=>console.log(data))
    },[])

    return (
        <div className='lg:flex mx-4 my-4 gap-4'>
            <div className='blogs bg-slate-400 w-full '>
                {/* blog part */}
                <h1>hi</h1>
            </div>
            <div className='lg:sticky bg-success w-full  basis-2/12'>
                {/* sidebar */}
                <h1>hi</h1>
            </div>

        </div>
    );
};

export default BlogCard;