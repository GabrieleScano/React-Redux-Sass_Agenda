import React from 'react'
import { useSelector } from 'react-redux';
import { AgendaEntry } from './AgendaEntry';

export const AgendaEntries = () => {

    const { notes } = useSelector( state => state.notes );

    return (
        <div className="agenda__entries">
            
            {
                notes.map( note => (
                    <AgendaEntry 
                        key={ note.id }
                        { ...note }
                    />
                ))
            }

        </div>
    )
}
