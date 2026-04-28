import { validateCardNumber } from "../services/card.service";

describe("Card Validation Service", () => {
  it("should return true for a valid card number", () => {
    const validCard = "4539578763621486";
    expect(validateCardNumber(validCard)).toBe(true);
  });

  it("should return false for an invalid card number", () => {
    const invalidCard = "1234567890123";
    expect(validateCardNumber(invalidCard)).toBe(false);
  });

  it("should return false for card numbers with invalid length", () => {
    const shortCard = "1234";
    expect(validateCardNumber(shortCard)).toBe(false);
  });

  it("should handle card numbers with spaces", () => {
    const spacedCard = "4539 5787 6362 1486";
    expect(validateCardNumber(spacedCard)).toBe(true);
  });

  it("should return false for non-numeric input", () => {
    const badInput = "abcd1234";
    expect(validateCardNumber(badInput)).toBe(false);
  });
});
