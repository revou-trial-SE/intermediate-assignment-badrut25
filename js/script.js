function setSenderUI(now_datetime, name, birthDate, gender, messages){
    document.getElementById("now-datetime").innerText = now_datetime;
    document.getElementById("sender-full-name").innerHTML= name;
    document.getElementById("sender-birth-date").innerHTML= birthDate;
    document.getElementById("sender-gender").innerHTML= gender;
    document.getElementById("sender-messages").innerHTML= messages;
}

function validateForm(){
    const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "Desember"]
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]

    let date = new Date()
    let tanggal = (hari[date.getDay()]) +", "+ date.getDate()+" "+(bulan[date.getMonth()])+" "+ date.getFullYear()
    let jam = date.getHours() +":"+ date.getMinutes() +":" +date.getSeconds()

    now_datetime = tanggal + " " + jam

    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    
    if(name=="" || birthDate=="" || gender=="" || messages==""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(now_datetime, name, birthDate, gender, messages);

    return false;
}