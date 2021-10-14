import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';


import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm'
import { activeNote } from '../../actions/notes'


export const NoteScreen = () => {
    const { active } = useSelector( state => state.notes );
    const navDate = moment(active.date)


    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );

    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
        
        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );

    }, [formValues, dispatch])

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    return (
      <div className="notes__main-content">
        <span className="note-date">{navDate.format("DD MMMM YYYY")}</span>

        <div className="notes__content">
        <span className="uploadImage m-0" onClick={handlePictureClick}>
          <i className="far fa-image mr-5"></i> 
          Picture
        </span>
          <input
            type="text"
            placeholder="Some awesome title"
            className="notes__title-input"
            autoComplete="off"
            name="title"
            value={title}
            onChange={handleInputChange}
          />

          <textarea
            placeholder="What happened today"
            className="notes__textarea"
            name="body"
            value={body}
            onChange={handleInputChange}
          ></textarea>

          {note.url && (
            <div className="notes__image">
              <img src={note.url} alt="imagen" />
            </div>
          )}
        </div>

        <NotesAppBar />
      </div>
    );
}
