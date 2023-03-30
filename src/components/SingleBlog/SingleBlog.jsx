import React from 'react';

const SingleBlog = ({singleBlog}) => {
    return (
        <div className='rounded-md border-indigo-500/75 border my-2 bg-white font-semibold p-1'> 
            <h1>{singleBlog}</h1>
        </div>
    );
};

export default SingleBlog;