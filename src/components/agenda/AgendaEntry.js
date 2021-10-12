import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const AgendaEntry = ({ id, date, title, body, url }) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch( 
            activeNote( id, {
                date, title, body, url
            })
        );
    }

    return (
        <div 
            className="agenda__entry pointer animate__animated animate__fadeIn animate__faster"
            onClick={ handleEntryClick }
        >
            
            {
                url &&
                <div 
                    className="agenda__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${ url })`
                    }}
                ></div>
            }

            <div className="agenda__entry-body">
                <p className="agenda__entry-title">
                    { title }
                </p>
                <p className="agenda__entry-content">
                    { body }
                </p>
            </div>

            <div className="agenda__entry-date-box">
                <span> { noteDate.format('dddd') } </span>
                <h4> { noteDate.format('Do') } </h4>
            </div>

        </div>
    )
}
