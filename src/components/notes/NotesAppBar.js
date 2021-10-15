import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleting } from '../../actions/notes'
import { startSaveNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );
    const { active:note } = useSelector( state => state.notes );

    const [ formValues ] = useForm( note );
    const { id } = formValues;

    
    
    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    }

    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }

    return (
        <>
 
        <div className="notes__appbar">

        </div>
            <div className="col-elements">
                <button 
                className="btn btn-danger m-0"
                onClick={ handleDelete }
            >
                Delete
            </button>
                <button 
                    className="btn btn-primary btn-save m-0"
                    onClick={ handleSave }
                >
                    Save
                </button>

            </div>
        </>
    )
}
