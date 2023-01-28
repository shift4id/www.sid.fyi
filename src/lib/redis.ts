import { createClient } from "@vercel/kv";

const redis = createClient({ url: process.env.REDIS_REST_API_URL, token: process.env.REDIS_REST_API_TOKEN });

export default redis;
