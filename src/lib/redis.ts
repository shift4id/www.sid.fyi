import { createClient } from "@vercel/kv";
import { serverEnv } from "@/constants/env";

export const redis = createClient({
  url: serverEnv.REDIS_REST_API_URL,
  token: serverEnv.REDIS_REST_API_TOKEN,
});
