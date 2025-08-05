const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

// 1
const scoreAbove50 = students.filter((student) => student.score > 50);

// 2
const newScores = scoreAbove50.map((student) => student.score + (student.score * 0.1));

// 3
const totalScore = newScores.reduce((acc, total) => acc + total);

// 4
console.log(`Total score is ${totalScore}`);