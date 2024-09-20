function updateDateTime() 
{
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const formattedDate = now.toLocaleString('en-GB', options);
    document.getElementById('datetime').textContent = formattedDate;
}

// Update date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);