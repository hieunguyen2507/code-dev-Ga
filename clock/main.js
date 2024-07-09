const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const deg = 6;


setInterval(() =>{
    const date = new Date();

    //tính góc xoay của kim đồng hồ
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;
    
    //thiết lập góc quay của kim so với thời gian thực
    hr.style.transform = `rotate(${hh + mm/12}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
});