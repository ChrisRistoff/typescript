export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let count = 1;
  let bounceHeight = h * bounce;

  while (bounceHeight > window) {
    count += 2;
    bounceHeight *= bounce;
  }

  return count;

}

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
console.log(bouncingBall(30, 0.75, 1.5)); // 21
console.log(bouncingBall(30, 0.4, 10)); // 3
