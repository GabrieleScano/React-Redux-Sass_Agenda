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
        <div className="agenda__sidebar-navbar">
        <h3 className="mt-10 ml-15">
            <i className="far fa-user"></i>
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
