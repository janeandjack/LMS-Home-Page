(() => {
//variable stack first
const courseInfo = document.querySelector('.profPanelText').querySelectorAll('p'),
      Course_title= document.querySelector('.courseInfo').querySelector('h2'),
      Box_nav = document.querySelector('.yellowBoxNav'),
      Course_Des = document.querySelector('.courseInfo').querySelector('p');

//write functions in the middle
function setCourseInfo(data) {
    courseInfo[0].textContent = data.coursename;
    courseInfo[0].innerHTML += ` - <span class="text-primary">${data.coursecode}</span>`;

    courseInfo[1].textContent = `Professor: ${data.profname}`;
    document.querySelectorAll('.profileImg')[1].src = `images/${data.profimg}`;
    //add the times
    data.classtime.forEach(time => {
        let newTime = `<li><span class="fa fa-clock-o">${time}</span><li>`;
        courseInfo[1].parentElement.querySelector('ul').innerHTML += newTime;
    });
    Course_title.textContent = data.coursename + ' - ' +data.coursecode;
    Course_Des.textContent = data.coursedesc;
    data.coursecontent.forEach(content => {
    document.querySelector('.weeklySched').querySelector('ul').innerHTML += `<li>${content}</li>`;
    });

}
Box_nav.style.float = 'right';
function getData(){
    fetch('./admin/connect.php')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setCourseInfo(data[0]);
    })
    .catch(function(error){
        console.log(error);
    });
}
getData(classData);
//call the setCourseInfo functin
setCourseInfo(classData);
})();