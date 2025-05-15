# smartLandlord-backend

Local setup guide for the SmartLandlord backend.

## Prerequisites

*   Node.js (v20.x+) & npm
*   Git

## Development Setup

1.  **Clone:**
    ```bash
    git clone https://github.com/smartLanlord/smartLandlord-backend.git
    cd smartLandlord-backend
    ```

2.  **Environment (.env):**
    *   Create a `.env` file in the project root.
    *   Reach out to [nisaacdz](https://github.com/nisaacdz) for the development environment variables and paste them into `.env`.

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Prisma:**
    ```bash
    npx prisma generate
    ```
5.  **Run:**
    ```bash
    npm run dev
    ```

## Running Tests Locally

1.  **Test Environment (.env.testing):**
    *   Create a `.env.testing` file in the project root.
    *   Reach out to [nisaacdz](https://github.com/nisaacdz) for **testing-specific** environment variables and paste them into `.env.testing`.

2.  **Run All Tests:**
    ```bash
    npm run test
    ```

3. **Run Specific Test:**
    ```bash
    npm run test tests/auth.test.ts
    ```

This uses `.env.testing` for test configurations.
---