import { Request, Response } from "express";
import { validateCardNumber } from "../services/card.service";
import { ValidateCardRequest } from "../types";
import { AppError } from "../utils/AppError";

/**
 * Controller to handle card validation requests
 */
export const validateCard = (req: Request, res: Response) => {
  const { cardNumber } = req.body as ValidateCardRequest;

  // Check if cardNumber is provided
  if (!cardNumber) {
    throw new AppError("cardNumber is required", 400);
  }

  // Validate card number
  const isValid = validateCardNumber(cardNumber);

  return res.status(200).json({
    valid: isValid,
  });
};
