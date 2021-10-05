import React from 'react'
import { AgendaEntry } from './AgendaEntry'

export const AgendaEntries = () => {
  const entries = [1, 2, 3, 4, 5];

  return (
    <div className="agenda__entries">
      {entries.map((value) => (
        <AgendaEntry key={value} />
      ))}
    </div>
  );
};
