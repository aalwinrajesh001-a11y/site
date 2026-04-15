function updateClock(){
    const now =new Date();
    const timeString = now.toLocaleTimeString();
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    const dateString = now.toLocaleDateString(undefined,dateOptions);

    document.getElementById('time').textContent=timeString;
    document.getElementById('date').textContent=dateString;

}
updateClock();
setInterval(updateClock,1000);