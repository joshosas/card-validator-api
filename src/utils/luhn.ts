/**
 * Validates a card number using the Luhn Algorithm
 */

export const isValidLuhn = (cardNumber: string): boolean => {
  // Remove all non-digit characters (e.g., spaces, dashes)
  const sanitized = cardNumber.replace(/\D/g, "");

  let sum = 0;
  let shouldDouble = false;

  // Loop through digits from right to left
  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized[i], 10);

    if (shouldDouble) {
      digit *= 2;

      // If doubling results in a number > 9, subtract 9
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }
  // Valid if sum is divisible by 10
  return sum % 10 === 0;
};
