import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm'
import { activeNote } from '../../actions/notes'

export const NoteScreen = () => {
    const { active } = useSelector( state => state.notes )
    const navDate = moment(active.date)


    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes )

    const [ formValues, handleInputChange, reset ] = useForm( note )
    const { body, title } = formValues
    const activeId = useRef( note.id )

    useEffect(() => {
      if (note.id !== activeId.current) {
        reset(note);
        activeId.current = note.id;
      }
    }, [note, reset])

    useEffect(() => {
      dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch])

    return (
      <div className="notes__main-content">
        <span className="note-date">{navDate.format("DD MMMM YYYY")}</span>
        <div className="notes__content">
          <input
            type="text"
            placeholder="Title"
            className="notes__title-input"
            autoComplete="off"
            name="title"
            value={title}
            onChange={handleInputChange}
          />

          <textarea
            placeholder="Write here your notes!"
            className="notes__textarea"
            name="body"
            value={body}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <NotesAppBar />
      </div>
    )
}
