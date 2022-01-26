function gcd(num1, num2) {
	const A = num1 > num2 ? num1 : num2;
  const B = num1 < num2 ? num1 : num2;
  
  const remainder = A % B;
  const quotient = A / B;
  
  if (B > 0) {
  	gcd(B, remainder);
  }
  
  if (B === 0) {
  	console.log(A);
  }
}

gcd(252, 105)
