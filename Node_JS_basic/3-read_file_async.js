const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data
        .split('\n')
        .filter(Boolean)
        .slice(1)
        .map((line) => {
          const [firstname, lastname, age, field] = line.split(',');
          return {
            firstname,
            lastname,
            age,
            field,
          };
        });

      const studentsByField = {
        CS: [],
        SWE: [],
      };

      students.forEach((student) => {
        if (studentsByField[student.field]) {
          studentsByField[student.field].push(student.firstname);
        }
      });

      const totalStudents = students.length;

      console.log(`Number of students: ${totalStudents}`);

      const csStudents = studentsByField.CS;
      const sweStudents = studentsByField.SWE;

      console.log(`Number of students in CS: ${csStudents.length || 0}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length || 0}. List: ${sweStudents.join(', ')}`);

      const result = {
        totalNumber: `Number of students: ${totalStudents}`,
        CS: `Number of students in CS: ${
          csStudents.length || 0
        }. List: ${csStudents.join(', ')}`,
        SWE: `Number of students in SWE: ${
          sweStudents.length || 0
        }. List: ${sweStudents.join(', ')}`,
      };

      resolve(result);
    });
  });
}

module.exports = countStudents;
