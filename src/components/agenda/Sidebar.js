import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AgendaEntries } from './AgendaEntries'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    const handleAddNew = () => {
        dispatch( startNewNote() );
    }

    return (
        <div className="agenda__sidebar">

            <div className="agenda__sidebar-navbar">
                <h3 className="mt-5">
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
            <AgendaEntries />  

            <button 
                className=" btn agenda__new-entry"
                onClick={ handleAddNew }
            >
                <i className="fas fa-plus fa-2x"></i>
                <p>
                    New entry
                </p>
            </button>

          

        </div>
    )
}
