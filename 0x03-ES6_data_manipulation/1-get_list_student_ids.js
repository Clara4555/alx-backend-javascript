/**
 * taking one argument which is an array of objects - a
 * nd this array is the same format as getListStudents
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
