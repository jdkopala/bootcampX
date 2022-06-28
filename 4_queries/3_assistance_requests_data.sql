SELECT teachers.name AS teacher, students.name AS student, assignments.name, (assistance_requests.completed_at - assistance_requests.started_at) AS duration
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN assignments ON assignments.id = assignment_id
ORDER BY duration;