import React from 'react'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../actions/notes'
import { Bar } from './Bar'


export const NothingSelected = () => {

    const dispatch = useDispatch()
    const handleAddNew = () => {
        dispatch(startNewNote())
    }

    return (
        <div className="nothing__main-content">
            <div className="notes__list">
            <h2 className="agenda__suggest">
                Create an entry!
            </h2>
         <Bar />
            </div>

            <button 
                className="btn agenda__new-entry color-hippie"
                onClick={ handleAddNew }
            >
                <i className="fas fa-plus fa-2x"></i>
            </button>
        </div>
    )
}
