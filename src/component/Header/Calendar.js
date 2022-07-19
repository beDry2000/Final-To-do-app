import React from 'react'

const Calendar = () => {
    // const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // const today = new Date();
    // const thisMonth = month[today.getMonth()];
    // const thisDate = today.getDate();
    // get todays date
    var locale = "en-us";
    var today = new Date();
    var dd = today.getDate();
    var monthName = today.toLocaleString(locale, { month: "short" });

    // add leading zeros
    if (dd < 10) {
        dd = '0' + dd;
    }


    return (
        
        <div className="calendar-box mr-4">
            <span className="top">
                {monthName}
            </span>
            <span class="bottom">{dd}</span>
        </div>
    )
}

export default Calendar