"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
const signUp = async (username: string, password: string) => {
  const { data, error } = await authClient.signUp.email(
    {
      name: "Sean",
      email: username,
      password,
    },
    {
      onRequest: (ctx) => {
        //show loading
      },
      onSuccess: (ctx) => {
        //redirect to the dashboard or sign in page
      },
      onError: (ctx) => {
        // display the error message
      },
    }
  );
};

const signIn = async () => {
  const { data, error } = await authClient.signIn.email(
    {
      email: "hello@gmail.com",
      password: "hello1231231",
    },
    {
      onSuccess: async (ctx) => {
        await fetch("/api/auth/token", {
          headers: {
            Authorization: `Bearer ${ctx.data.token}`,
          },
        });
      },
    }
  );
};

const signOut = async () => {
  const { data, error } = await authClient.signOut();
};

export default function Auth() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          style={{
            color: "black",
          }}
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
      </div>

      <div>
        <label htmlFor="password">password</label>
        <input
          id="password"
          style={{
            color: "black",
          }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
        onClick={() => {
          signUp(username, password);
        }}
      >
        Sign Up
      </button>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
