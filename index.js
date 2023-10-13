function todayDate(){
    let now = new Date();
    let dateString = now.toLocaleDateString();
    document.getElementById("dateOutput").textContent = dateString;
}

function time(){
    let now = new Date();
    let Hours = now.getHours();
    let minute = now.getMinutes();
    let timeString = `${Hours}:${minute}`;
    document.getElementById('timeOutput').textContent = timeString;

}

window.onload = function(){
    todayDate();
    time();
}