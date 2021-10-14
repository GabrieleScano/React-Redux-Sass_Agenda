import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleting } from '../../actions/notes'
import { startSaveNote, startUploading } from '../../actions/notes'
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

    // const handlePictureClick = () => {
    //     document.querySelector('#fileSelector').click();
    // }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file ) );
        }
    }

    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }

    return (
        <>
                {/* <button 
                    className="btn btn-primary m-0"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button> */}
        <div className="notes__appbar">

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />

        </div>
            <div className="colElements">
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
