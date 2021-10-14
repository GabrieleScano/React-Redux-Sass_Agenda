import React from 'react'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../actions/notes'
import { Sidebar } from './Sidebar';


export const NothingSelected = () => {

    const dispatch = useDispatch();
    const handleAddNew = () => {
        dispatch( startNewNote() );
    }


    return (
        <div className="nothing__main-content">
            <div className="noteList">

            <h2>

                Create an entry!
            </h2>
         <Sidebar />
            </div>

            <button 
                className=" btn agenda__new-entry"
                onClick={ handleAddNew }
            >
                <i className="fas fa-plus fa-2x"></i>
                {/* <p>
                    New entry
                </p> */} 
            </button>

        </div>
    )
}
