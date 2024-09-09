"use strict";
function toggleSkills() {
    const skillsContent = document.getElementById('skills-content');
    const toggleButton = document.querySelector('.toggle-button');
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    // Collect data from the form
    const name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value.trim();
    const email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value.trim();
    const number = (_c = document.getElementById('number')) === null || _c === void 0 ? void 0 : _c.value.trim();
    const city = ((_d = document.querySelector('input[name="city"]:checked')) === null || _d === void 0 ? void 0 : _d.value) || '';
    const degree = (_e = document.getElementById('degree')) === null || _e === void 0 ? void 0 : _e.value.trim();
    const university = (_f = document.getElementById('university')) === null || _f === void 0 ? void 0 : _f.value.trim();
    const graduationDate = (_g = document.getElementById('graduation-date')) === null || _g === void 0 ? void 0 : _g.value;
    const jobTitle = (_h = document.getElementById('job-title')) === null || _h === void 0 ? void 0 : _h.value.trim();
    const companyName = (_j = document.getElementById('company-name')) === null || _j === void 0 ? void 0 : _j.value.trim();
    const startDate = (_k = document.getElementById('start-date')) === null || _k === void 0 ? void 0 : _k.value;
    const endDate = (_l = document.getElementById('end-date')) === null || _l === void 0 ? void 0 : _l.value;
    // Validation
    if (!name || !email || !number || !city || !degree || !university || !graduationDate || !jobTitle || !companyName || !startDate || !endDate) {
        alert('Please fill in all required fields.');
        return;
    }
    // Format the data
    const resumeContent = `
        <h1>Resume</h1>
        <h2>Personal Information</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${number}</p>
        <p><strong>City:</strong> ${city}</p>
        <h2>Education</h2>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Graduation Date:</strong> ${graduationDate}</p>
        <h2>Work Experience</h2>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Start Date:</strong> ${startDate}</p>
        <p><strong>End Date:</strong> ${endDate}</p>
    `;
    // Display the resume
    const resumeContainer = document.getElementById('resume-content');
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeContent;
    }
    // Hide the form and show the edit button
    const formContainer = document.getElementById('form-container');
    const editButton = document.getElementById('edit-resume-btn');
    if (formContainer && editButton) {
        formContainer.style.display = 'none';
        editButton.style.display = 'inline-block';
    }
}
function editResume() {
    // Show the form again
    const formContainer = document.getElementById('form-container');
    const editButton = document.getElementById('edit-resume-btn');
    if (formContainer && editButton) {
        formContainer.style.display = 'block';
        editButton.style.display = 'none';
    }
}