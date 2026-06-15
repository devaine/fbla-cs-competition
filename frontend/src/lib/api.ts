import { authClient } from "./auth-client";
import "dotenv/config";

export async function apiFetch(path: string, options: RequestInit) {
  const { data: session } = await authClient.getSession();

  const token = session?.session.token;

  return fetch(`${process.env.BASE_URL}/api/${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options?.headers,
    },
  });
}
