import { serverEnv } from "@/constants/env";
import { createClient } from "@vercel/kv";

const redis = createClient({ url: serverEnv.REDIS_REST_API_URL, token: serverEnv.REDIS_REST_API_TOKEN });

export { redis };
