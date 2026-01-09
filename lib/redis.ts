import Redis from 'ioredis';

const redisClient = () => {
  if (!process.env.REDIS_URL) {
    throw new Error("REDIS_URL is not defined in environment variables")
  }
  return new Redis(process.env.REDIS_URL);
};


//singleton pattern for development to prevent exhausting connection limits
const globalForRedis = global as unknown as { redis: Redis };
export const redis = globalForRedis.redis || redisClient();

if (process.env.NODE_ENV !== 'production') globalForRedis.redis = redis;