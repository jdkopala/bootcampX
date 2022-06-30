const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2].toUpperCase() || JUL02;
const values = [cohortName]

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`, values)
.then(res => {
  console.log(res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`)
  }));
})
.catch(err => console.error('query error', err.stack));