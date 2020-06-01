import React from 'react';
function Calendar() {
  var tempDate = new Date();
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
  const currDate = date;
  return (
    <div className="date">{currDate}</div>
  );
}
 

 export default Calendar;