import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Sidebar = ({bookmark, markRead}) => {
    return (
        <div className='px-2'>
            <div className='bg-blue-100  border-indigo-600 border w-full rounded mb-4 p-2'>
                <p className='text-indigo-600 font-bold text-xl rounded mb-4'>Spent Time On Read: {markRead} min</p>
            </div>
            <div className='flex flex-col bg-slate-200 rounded p-3 '>
                <p className='text-xl font-bold'>Bookmarked Blogs: {bookmark.length}</p>
                {
                   bookmark.map(blogName => <SingleBlog singleBlog={blogName}></SingleBlog>)
                }

            </div>
            
        </div>
    );
};

export default Sidebar;