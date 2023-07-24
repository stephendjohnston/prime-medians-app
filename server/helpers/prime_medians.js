export function primeMedians(n) {
  const prime = Array.from({length: n+1}, (_, i) => true);
  let result = [];

  for (let p = 2; p * p <= n; p++) {
    if (prime[p] == true) {
      for (let i = p * p; i <= n; i += p) {
        prime[i] = false;
      }
    }
  }


  for (let i = 2; i <= n; i++) {
    if (prime[i] == true) {
      result.push(i);
    }
  }

  return getMedians(result)
}

export function getMedians(primes) {
  let medians;
  let middle = Math.floor(primes.length / 2)

  if (primes.length % 2 === 0) {
    medians = primes.slice(middle - 1, middle+1)
  } else {
    medians = [primes[middle]];
  }

  return medians;
}