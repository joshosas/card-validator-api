# Card Validator API

A simple backend API built with Node.js, TypeScript, and Express.js to validate card numbers using the Luhn Algorithm.

---

## 🚀 Features

- Validate card numbers via a REST API
- Implements Luhn Algorithm for correctness
- Handles invalid and malformed input gracefully
- Structured error handling with consistent responses
- Unit tested core validation logic

---

## 🛠️ Tech Stack

- Node.js
- TypeScript (`strict: true`)
- Express.js
- Jest (for testing)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/joshosas/card-validator-api.git
cd card-validator-api
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the App

Start the development server:

```bash
npm run dev
```

Server will run on:

```
http://localhost:3000
```

---

## 🧪 Running Tests

```bash
npm test
```

---

## 📡 API Endpoint

### POST `/validate-card`

#### Request Body

```json
{
  "cardNumber": "4539578763621486"
}
```

---

#### Success Response (200)

```json
{
  "valid": true
}
```

---

#### Error Response (400)

```json
{
  "error": "cardNumber is required"
}
```

---

## 🧠 Validation Logic

This project uses the **Luhn Algorithm**, a widely used checksum formula for validating identification numbers such as credit cards.

Steps:

1. Remove non-digit characters
2. Double every second digit from the right
3. Subtract 9 if result exceeds 9
4. Sum all digits
5. Check if total is divisible by 10

---

## 🏗️ Project Structure

```
src/
 ├── controllers/     # Handles HTTP logic
 ├── services/        # Business logic
 ├── utils/           # Luhn algorithm & helpers
 ├── routes/          # API routes
 ├── middlewares/     # Error handling
 ├── types/           # TypeScript interfaces
 └── tests/           # Unit tests
```

---

## ⚖️ Design Decisions

### 1. Separation of Concerns

- Controller handles HTTP
- Service handles logic
- Utils handle reusable functions

### 2. Luhn Algorithm Implementation

Used as the core validation logic because it is the industry standard for card validation.

### 3. Centralized Error Handling

Implemented a custom `AppError` class and global error middleware to ensure consistent API responses.

### 4. Type Safety

Used TypeScript with `strict: true` and custom interfaces to enforce predictable request/response structures.

### 5. Testing Strategy

Focused on unit testing the service layer to ensure deterministic and fast validation logic.

---

## ⚠️ Limitations

- Does not verify card issuer or existence
- Only checks structural validity

---

## 👨‍💻 Author

Joshua Aigbiremhon
