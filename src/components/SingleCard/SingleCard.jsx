import React from 'react';

const SingleCard = (props) => {
    console.log(props)
    const { author_image, blog_title, read_time, publish_date, cover_image, author_name, tags } = props.blog;
    return (
        <div>
            <div className="card card-compact w-full  shadow-xl">
                <figure><img className='w-full h-60' src={cover_image} alt="cover" /></figure>

                <div className="card-body">
                    <div className='flex justify-between'>

                        <div className='flex gap-4'>
                            <div>
                                <img className='w-10 rounded-full' src={author_image}/>
                            </div>
                            <div>
                                <h1 className='font-bold'>{author_name}</h1>
                                <p className='text-slate-500'>{publish_date} (4 Days ago)</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <p className='text-slate-500'>{read_time} min read</p>
                            <span className="cursor-pointer" onClick={()=>props.bookmark(blog_title)} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg></span>
                        </div>

                    </div>
                    <h2 className="card-title">{blog_title}</h2>
                    <p className='text-slate-500'>{tags.map(tag=>'#' + tag + " ")}</p>
                    <div className="card-actions">
                        <button onClick={()=>props.markRead(read_time)} className='underline text-blue-600'>Mark as read</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SingleCard;