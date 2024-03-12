/**
 *function getStudentsByLocation that returns 
 an array of objects who are located in a specific city.
 *@param {String} city - The location.
 */

export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
