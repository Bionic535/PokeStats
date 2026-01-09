import { NextResponse } from "next/server";
import { redis } from '@/lib/redis';
export async function GET() {
  try {
      // 1. Set a value in Redis
      await redis.set('greeting', 'Hello from Redis Cloud!', 'EX', 600); // Expires in 60s
  
      // 2. Get a value from Redis
      const message = await redis.get('greeting');
  
      return NextResponse.json({ message });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to connect to Redis' }, { status: 500 });
    }
}