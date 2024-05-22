const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n').filter(Boolean);
    const students = lines.slice(1).map((line) => {
      const [firstName, lastName, age, field] = line.split(',');
      return {
        firstName,
        lastName,
        age,
        field,
      };
    });

    const csStudents = students.filter((student) => student.field === 'CS');
    const sweStudents = students.filter((student) => student.field === 'SWE');

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student.firstName).join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student.firstName).join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
