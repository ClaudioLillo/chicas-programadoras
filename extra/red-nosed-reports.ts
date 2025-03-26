const reports = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

const isSafe = (report: number[]) => {
  let mode = report[0] > report[1] ? "dec" : "inc";
  let i = 0;
  while (i < 4) {
    if (
      mode === "dec" &&
      (report[i] <= report[i + 1] || report[i] >= report[i + 1] + 3)
    ) {
      return false;
    }
    if (
      mode === "inc" &&
      (report[i] >= report[i + 1] || report[i] + 4 <= report[i + 1])
    ) {
      return false;
    }
    i++;
  }
  return true;
};

for (const report of reports) {
  console.log(isSafe(report) ? "Safe" : "Unsafe");
}
