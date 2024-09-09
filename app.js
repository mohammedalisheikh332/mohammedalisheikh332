function toggleSkills() {
    var skillsContent = document.getElementById('skills-content');
    var toggleButton = document.querySelector('.toggle-button');
    if (skillsContent.style.display === 'none') {
        skillsContent.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsContent.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
}
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var cityElement = document.querySelector('input[name="city"]:checked');
    var city = cityElement ? cityElement.value : '';
    var skills = document.getElementById('Skills').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var graduationDate = document.getElementById('graduation-date').value;
    var jobTitle = document.getElementById('job-title').value;
    var companyName = document.getElementById('company-name').value;
    var startDate = document.getElementById('start-date').value;
    var endDate = document.getElementById('end-date').value;
    var resumeContent = "\n        <h1>Resume</h1>\n        <h2>Personal Information</h2>\n        <p><strong>Full Name:</strong> ".concat(name, "</p>\n        <p><strong>Email Address:</strong> ").concat(email, "</p>\n        <p><strong>Contact Number:</strong> ").concat(number, "</p>\n        <p><strong>City:</strong> ").concat(city, "</p>\n\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n\n        <h2>Education</h2>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>University:</strong> ").concat(university, "</p>\n        <p><strong>Graduation Date:</strong> ").concat(graduationDate, "</p>\n\n        <h2>Work Experience</h2>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company Name:</strong> ").concat(companyName, "</p>\n        <p><strong>Start Date:</strong> ").concat(startDate, "</p>\n        <p><strong>End Date:</strong> ").concat(endDate, "</p>\n    ");
    var resumeContentDiv = document.getElementById('resume-content');
    resumeContentDiv.innerHTML = resumeContent;
    alert("Resume Generated! Check the console for detailed content.");
    console.log(resumeContent);
}