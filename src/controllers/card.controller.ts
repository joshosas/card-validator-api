import { Request, Response, NextFunction } from "express";
import { validateCardNumber } from "../services/card.service";
import { ValidateCardRequest } from "../types";
import { AppError } from "../utils/AppError";

/**
 * Controller to handle card validation requests
 */
export const validateCard = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { cardNumber } = req.body as ValidateCardRequest;

    // Missing input
    if (!cardNumber) {
      throw new AppError("cardNumber is required", 400);
    }

    // Type validation
    if (typeof cardNumber !== "string") {
      throw new AppError("cardNumber must be a string", 400);
    }

    // Validate card number
    const isValid = validateCardNumber(cardNumber);

    return res.status(200).json({
      valid: isValid,
    });
  } catch (error) {
    next(error);
  }
};
