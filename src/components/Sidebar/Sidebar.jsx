import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Sidebar = ({bookmark, markRead}) => {
    return (
        <div className='px-2'>
            <div className=''>
                <p className='text-blue-400 text-xl rounded mb-4'>Spent Time On Read: {markRead} min</p>
            </div>
            <div className='flex flex-col bg-slate-200 rounded '>
                <p className='text-xl font-bold'>Bookmarked Blogs: {bookmark.length}</p>
                {
                   bookmark.map(blogName => <SingleBlog singleBlog={blogName}></SingleBlog>)
                }

            </div>
            
        </div>
    );
};

export default Sidebar;