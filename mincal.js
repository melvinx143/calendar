
function timerz() {
    let p = new Date();
    //PRESENT DATE
    document.querySelector('.daytoday').innerHTML = p.getDate();
    //PRESENT YEAR
    document.getElementById('currentyear').innerHTML = p.getFullYear();

    //PRESENT DAY OF THE WEEK

    let presentmonth = p.getDay();

    if (presentmonth == '0') {
        document.querySelector('.dayofweek').innerHTML = 'Sunday';
    }

    else if (presentmonth == '0') {
        document.querySelector('.dayofweek').innerHTML = 'Tuesday';
    }

    else if (presentmonth == '0') {
        document.querySelector('.dayofweek').innerHTML = ' Tuesday';
    }
    else if (presentmonth == '2') {
        document.querySelector('.dayofweek').innerHTML = ' Tuesday';
    }
    else if (presentmonth == '3') {
        document.querySelector('.dayofweek').innerHTML = ' Wednesday';
    }
    else if (presentmonth == '4') {
        document.querySelector('.dayofweek').innerHTML = ' Thursday';
    }
    else if (presentmonth == '5') {
        document.querySelector('.dayofweek').innerHTML = 'Friday';
    }
    else {
        document.querySelector('.dayofweek').innerHTML = 'Saturday';

    }
    //<!--------------------------------->

    //PRESENT YEAR
    let present_month = p.getMonth();
    console.log(present_month);

    if (present_month == '0') {
        document.querySelector('.monthtoday').innerHTML = 'January';
    }

    else if (present_month == '1') {
        document.querySelector('.monthtoday').innerHTML = 'Feb';
    }

    else if (present_month == '2') {
        document.querySelector('.monthtoday').innerHTML = 'March';
    }
    else if (present_month == '3') {
        document.querySelector('.monthtoday').innerHTML = 'April';
    }
    else if (present_month == '4') {
        document.querySelector('.monthtoday').innerHTML = 'May';
    }
    else if (present_month == '5') {
        document.querySelector('.monthtoday').innerHTML = 'June';
    }
    else if (present_month == '6') {
        document.querySelector('.monthtoday').innerHTML = 'July';
    }
    else if (present_month == '7') {
        document.querySelector('.monthtoday').innerHTML = 'Aug';
    }
    else if (present_month == '8') {
        document.querySelector('.monthtoday').innerHTML = 'Sept';
    }
    else if (present_month == '9') {
        document.querySelector('.monthtoday').innerHTML = 'October';

    }
    else if (present_month == '10') {
        document.querySelector('.monthtoday').innerHTML = 'Nov';
    }
    else {
        document.querySelector('.monthtoday').innerHTML = 'December';

    }
    //  THIS IS DIGITAL CLOCK SECTION


    if (p.getHours() < 10) {
        document.querySelector('.presenthour').innerHTML = p.getHours();
        document.querySelector('.zonal').innerHTML = 'AM';
        console.log('am');
    }
    else {
        document.querySelector('.presenthour').innerHTML = p.getHours();
        document.querySelector('.zonal').innerHTML = 'PM';
        console.log('pm');
    }

    if (p.getMinutes() < 10) {
        document.querySelector('.presentmin').innerHTML = '0' + p.getMinutes();
    }
    else {
        document.querySelector('.presentmin').innerHTML = p.getMinutes();
    }

    if (p.getMilliseconds() < 10) {
        document.querySelector('.presentmsec').innerHTML = '0' + p.getMilliseconds();
    }
    else {
        document.querySelector('.presentmsec').innerHTML = p.getMilliseconds();
    }

}

setInterval(timerz, 1000);
timerz();
