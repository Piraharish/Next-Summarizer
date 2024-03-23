/**
 * An array of Routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification", "/terms"];

/**
 * An array of Routes that are used for authentication.
 * These routes will redirect logged in users to /summarize.
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The Prefix for API authentication Routes.
 * Routes that starts with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
