import React from 'react';

const SingleCard = ({ blog }) => {
    const { author_image, blog_title, read_time, publish_date, cover_image, author_name } = blog;
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
                                <p>{publish_date} (4 Days ago)</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <p>{read_time} min read</p>
                            <span className="cursor-pointer" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg></span>
                            
                        </div>
                    </div>
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;