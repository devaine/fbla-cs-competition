import { betterAuth } from "better-auth";
import { genericOAuth, username } from "better-auth/plugins";
import { Pool } from "pg";
import "dotenv/config";

export const auth = betterAuth({
  baseURL: process.env.BASE_URL,
  database: new Pool({
    connectionString: process.env.PG_CONNECTION_STRING,
  }),
  plugins: [
    username(),
    genericOAuth({
      config: [
        {
          providerId: "keycloak",
          clientId: process.env.OAUTH_CLIENT_ID as string,
          clientSecret: process.env.OAUTH_CLIENT_SECRET as string,

          pkce: true,

          authorizationUrl: `${process.env.OAUTH_ISSUER}/protocol/openid-connect/auth`,
          tokenUrl: `${process.env.OAUTH_ISSUER}/protocol/openid-connect/token`,
          userInfoUrl: `${process.env.OAUTH_ISSUER}/protocol/openid-connect/userinfo`,

          scopes: ["openid", "profile", "email"],
        },
      ],
    }),
  ],
});
