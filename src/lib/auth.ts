import { Pool } from "pg";
import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";

export const auth = betterAuth({
  plugins: [
    jwt({
      jwt: {
        issuer: "https://sample-next-js-deployment-song.netlify.app",
        audience: "https://sample-next-js-deployment-song.netlify.app",
      },
      jwks: {
        keyPairConfig: {
          alg: "RS256",
        },
      },
    }),
  ],
  database: new Pool({
    database: "sample",
    user: "neondb_owner",
    password: "npg_Usml56FREWkD",
    host: "ep-round-salad-a7u37yev-pooler.ap-southeast-2.aws.neon.tech",
    ssl: true,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
