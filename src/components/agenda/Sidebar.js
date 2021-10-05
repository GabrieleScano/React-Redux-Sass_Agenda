import React from 'react'
import { AgendaEntries } from './AgendaEntries'

export const Sidebar = () => {
  return (
    <aside className="agenda__sidebar">
      <div className="agenda__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>Gabriele</span>
        </h3>

        <button className="btn">Logout</button>
      </div>
      <div className="agenda__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>
      <AgendaEntries />
    </aside>
  );
};
