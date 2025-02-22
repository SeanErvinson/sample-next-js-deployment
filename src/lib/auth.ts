import { LibsqlDialect } from "@libsql/kysely-libsql";
import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";

export const auth = betterAuth({
  plugins: [jwt()],
  database: {
    dialect: new LibsqlDialect({
      url: "libsql://next-js-sample-seanervinson.turso.io",
      authToken:
        "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NDAyNjQ1MzksImlkIjoiMWI2OTMyNGItMGQ3Ny00NzczLThmNWUtOTQ0ZmJhZjNiMWM1In0.PtnZnsoWck6kGS3Pn7malo1QilzXkpHVyOfi5hIVjVflbJXtHLoLYl-KiMeAjnbsrlPEFENeZdcFv9rI1Fw8Dw",
    }),
    type: "sqlite",
  },
  emailAndPassword: {
    enabled: true,
  },
});
