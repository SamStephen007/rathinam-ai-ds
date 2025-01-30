function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get the 'id' from the URL
const id = getQueryParam('id');

fetch(`http://localhost:8000/AllStudents/student/${id}`)
  .then(response => {
      if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
  })
  .then(data => {
      displayStudentData(data);
      fetchStudentImage(id); // Fetch the image separately
  })
  .catch(error => console.error('Fetch error:', error));

function displayStudentData(student) {
  const detailsContainer = document.getElementById('bio_data');
  const studentNameContainer = document.querySelector('.Student_name');
  const studentImageContainer = document.querySelector('.Student_img');

  // Create student details HTML
  const studentHTML = `
      <ul>
          <li><strong>Roll No:</strong> ${student.id}</li>
          <li><strong>Name: </strong>${student.studentName}</li>
          <li><strong>Age: </strong> ${student.studentAge}</li>
          <li><strong>Phone: </strong> ${student.studentPhone}</li>
          <li style="color: red;"><strong>Blood Group: </strong> ${student.studentBloodgroup}</li>
      </ul>
  `;

  const studentNameHTML = `<h1>${student.studentName}</h1>`;

  // Append student data
  detailsContainer.innerHTML = studentHTML;
  studentNameContainer.innerHTML = studentNameHTML;

  // Clear image container initially
  studentImageContainer.innerHTML = '<p>Loading image...</p>';
}

function fetchStudentImage(studentId) {
  fetch(`http://localhost:8000/AllStudents/student/${studentId}/image`)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Image fetch error: ${response.statusText}`);
          }
          return response.blob();
      })
      .then(imageBlob => {
          const imageUrl = URL.createObjectURL(imageBlob);
          document.querySelector('.Student_img').innerHTML = `<img src="${imageUrl}" alt="Student Image" width="100%" heigth="100%" />`;
      })
      .catch(error => {
          console.error('Image Fetch Error:', error);
          document.querySelector('.Student_img').innerHTML = '<p>No image available</p>';
      });
}
