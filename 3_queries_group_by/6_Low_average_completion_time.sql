SELECT students.name, avg(assignment_submissions.duration), avg(assignments.duration)
FROM students
JOIN assignment_submissions ON student_id = students.id
JOIN assignments ON  assignment_id = assignments.id
WHERE end_date IS NULL
GROUP BY students.name
HAVING avg(assignment_submissions.duration) < avg(assignments.duration)
ORDER BY avg(assignment_submissions.duration) ASC;