import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-success">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">My Blog</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;