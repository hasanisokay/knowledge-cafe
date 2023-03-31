import React from 'react';

const Blog = () => {
    return (
        <div className='my-2 lg:mx-10 mx-6 w-full'>
            <h1 className='text-xl font-bold mt-4'>1. Props vs State?</h1>
            <p className="text-lg font-semibold mb-2">Ans: Props are data that passed to the child components from parent component. Data can be from any valid Javascript data types. this is read only data, means this can only be read in the child component, cannot modify or update in child components. <br />
                State is owned locally in a component and it update itself when any change happen. Benefit of using state is, it just adjust or change the updated part only, does not reload the entire page.
            </p>
            <h1 className='text-xl font-bold mt-4'>2. How does useState work?</h1>
            <p className="text-lg font-semibold mb-2">Ans: useState is a React hook that allows state to a functional component. It returns an array with two values, the current state and a setter function which is used to update the state. When the setter function is called with data it compare new data with the previous state and update or just modify or just add in the state. This is helpful because, any valid Javascript data type can be stored and updated by calling the setter function.</p>
            <h1 className='text-xl font-bold mt-4'>3. Purpose of useEffect other than fetching data.</h1>
            <p className="text-lg font-semibold mb-2">useEffect can be used to validate the input field. When input is being stored in a state, the validation can run everytime with input change. It can also be used in live filtering, trigger animation on new array value</p>
            <h1 className='text-xl font-bold mt-4'>4. How Does React work?</h1>
            <p className="text-lg font-semibold mb-2">React is a component based Javascript library. First, React create a virtual DOM which is basically a Javascript Object. We can manipulate this virtual DOM with Javascript. When any change happen, React create another virtual DOM with the changed data and compare this with the old virtual DOM. React find this changes in the tree using Diff algorithm and update the changed part without re-rendering the browser DOM. And efficiently put the change in the browser DOM</p>
        </div>
    );
};

export default Blog;