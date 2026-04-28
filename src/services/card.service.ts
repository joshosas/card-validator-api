import { isValidLuhn } from "../utils/luhn";

/**
 * Service to handle card validation logic
 */
export const validateCardNumber = (cardNumber: string): boolean => {
  // Basic guard: ensure input exists
  if (!cardNumber) {
    return false;
  }

  // sanitize card number (eg; remove spaces and dashes)
  const sanitized = cardNumber.replace(/\D/g, "");

  // Reject if not purely numeric after sanitization
  if (!/^\d+$/.test(sanitized)) {
    return false;
  }

  //enforce minimum and maximumn length
  if (sanitized.length < 13 || sanitized.length > 19) {
    return false;
  }

  // Perform Luhn check
  return isValidLuhn(sanitized);
};
