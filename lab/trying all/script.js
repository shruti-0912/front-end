document.getElementById('calc').addEventListener('click', function(event) {
    event.preventDefault();
    // Prevent form submission

// Get form inputs
  var fullName = document.getElementById('fullName').value;
  var rollNumber = document.getElementById('rollNumber').value;
  var marksCSE3051 = parseFloat(document.getElementById('marksCSE3051').value);
  var marksCSE3052 = parseFloat(document.getElementById('marksCSE3052').value);
  var marksCSE3053 = parseFloat(document.getElementById('marksCSE3053').value);


// Add similar code to get marks for other courses

// Calculate SGPA
  var totalCredits = 6; // Total credits for all courses
  var gradePoints = calculateGradePoints(marksCSE3051); // Calculate grade points for CSE3051
  var gradePointsq = calculateGradePoints(marksCSE3052); // Calculate grade points for CSE3051
  var gradePointsr = calculateGradePoints(marksCSE3053); // Calculate grade points for CSE3051

// Add similar code to calculate grade points for other courses
  var a=totalCredits*gradePoints;
  var b=totalCredits*gradePointsq;
  var c=totalCredits*gradePointsr;
  var totalGradePoints = a+b+c;
  var sgpa = totalGradePoints / 18;

// Display SGPA
  document.getElementById('sgpaValue').innerText = sgpa.toFixed(2);
  document.getElementById('sgpaResult').classList.add('show');
});

function calculateGradePoints(marks) {
// Define your grading system here
if (marks >= 90) {
  return 10;
} else if (marks >= 80) {
  return 9;
} else if (marks >= 70) {
  return 8;
} else if (marks >= 60) {
  return 7;
} else if (marks >= 50) {
  return 6;
} else if (marks >= 40) {
  return 5;
} else {
  return 0;
}
}
