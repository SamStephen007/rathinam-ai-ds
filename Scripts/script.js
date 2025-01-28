/*
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Get the 'id' from the URL
  const id = getQueryParam('id');
*/


  fetch(`http://localhost:8080/AllStudents/student/1`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => displayStudentData(data))
  .catch(error => console.error('Fetch error:', error)
 );

 function displayStudentData(student) {
  // Select the placeholder div
  const detailsContainer = document.getElementById('bio_data');
  const Student_name = document.querySelector('.Student_name');
  const studentImageContainer = document.querySelector('.Student_img');
  
  // for each loop data.foreach(student => {});
 
      // Create an HTML structure for each student
      const studentHTML = `
 
        <ul>
          <li><strong>Roll No:</strong> ${student.id}</li>
          <li><strong>Name: </strong>${student.studentName}</li>
          <li><strong>Age: </strong> ${student.studentAge}</li>
          <li><strong>Phone: </strong> ${student.studentPhone}</li>
          <li  style="color: red;"><strong>Blood Group: </strong> ${student.studentBloodgroup}</li>
        </ul>
      `;

      const studentName=`
            <h1>${student.studentName}</h1>
      `

      let studentImageHTML = '';
      if (student.imagedata) {
        const imageSrc = `data:${student.imagetype};base64,${student.imagedata}`;
        studentImageHTML = `<img src="${imageSrc}" alt="Student Image" />`;
      } else {
        studentImageHTML = '<p>No image available</p>';
      }
      // Append the student data to the container
      detailsContainer.innerHTML = studentHTML;
      Student_name.innerHTML=studentName;
      studentImageContainer.innerHTML = studentImageHTML;
  
}