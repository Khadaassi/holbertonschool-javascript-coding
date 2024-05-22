const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    readDatabase(process.argv[2] || './database.csv')
      .then((studentsData) => {
        const csStudents = studentsData.CS.join(', ');
        const sweStudents = studentsData.SWE.join(', ');

        const responseText = 'This is the list of our students\n'
          + `Number of students in CS: ${studentsData.CS.length}. List: ${csStudents}\n`
          + `Number of students in SWE: ${studentsData.SWE.length}. List: ${sweStudents}`;

        response.status(200).send(responseText);
      })
      .catch((error) => {
        console.error('Error:', error);
        response.status(500).send('Cannot load the database');
      });
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;

      if (major !== 'CS' && major !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const studentsData = await readDatabase(process.argv[2] || './database.csv');
      const students = studentsData[major] || [];
      response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      console.error('Error:', error);
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
