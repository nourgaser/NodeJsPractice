// const requestOptions = {
// method: 'POST',
// headers: {
//   'Accept': 'application/json',
//   'Access-Control-Allow-Origin':'*',
//   'Content-Type': 'applications/json'
// },
// body: {}
// };
//fetch('/allcourses', requestOptions)
async function addDataToPage(){
    fetch('../api/allcourses')
    .then(res => res.json())
    .then(data => {
        data.courses.forEach(element => {
            document.getElementById("mainDiv").innerHTML += `
        <div id="${element.coursename}" class="courseCard">
            <ul>
                <h3>${element.coursename}</h3>
                <li>${element.coursename}</li>
                <li>${element.crn}</li>
                <li><a href="${element.fbLink}">Facebook Group Link</a></li>
            </ul>
        <div>`;
        });
    }).catch(e => console.log(e));
}


addDataToPage();