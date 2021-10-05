import React from 'react'

export const AgendaEntry = () => {
  return (
    <div className="agenda__entry pointer">
      <div
        className="agenda__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)",
        }}
      ></div>
      <div className="agenda__entry-body">
        <p className="agenda__entry-title">Un nuevo día</p>
        <p className="agenda__entry-content">
          Reprehenderit id in duis consectetur deserunt veniam fugiat.
        </p>
      </div>
      <div className="agenda__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
