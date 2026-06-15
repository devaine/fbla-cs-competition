import { createAuthClient } from "better-auth/react";
import { genericOAuthClient, usernameClient } from "better-auth/client/plugins";
import "dotenv/config";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", //process.env.BASE_URL
  plugins: [genericOAuthClient(), usernameClient()],
});
