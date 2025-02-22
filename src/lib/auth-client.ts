import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://sample-next-js-deployment-song.netlify.app",
});
