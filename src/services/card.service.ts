import { isValidLuhn } from "../utils/luhn";

/**
 * Service to handle card validation logic
 */
export const validateCardNumber = (cardNumber: string): boolean => {
  // Basic guard: ensure input exists
  if (!cardNumber) {
    return false;
  }

  //enforce minimum and maximumn length
  const sanitized = cardNumber.replace(/\D/g, "");

  if (sanitized.length < 16 || sanitized.length > 19) {
    return false;
  }

  // Perform Luhn check
  return isValidLuhn(sanitized);
};
