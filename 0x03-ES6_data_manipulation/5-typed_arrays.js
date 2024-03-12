/*
 *function named createInt8TypedArray that returns a new ArrayBuffer
 *with an Int8 value at a specific position.
 * accept three arguments: length (Number), 
 * position (Number), and value (Number).
 *return buf
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
