import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );
    const handleLogout = () => {

        dispatch( startLogout() )
    }
    return (
        <div className="agenda__bar-navbar">
        <h3 className="name-container mt-10 ml-15">
            <div className="green-cube"></div>
            <div className="green-cube-medium"></div>
            <div className="green-cube-small"></div>
            <span> { name }</span>
        </h3>

        <button 
            className="btn btn-logout"
            onClick={ handleLogout }
        >
            Logout
        </button>
    </div>
    )
}
