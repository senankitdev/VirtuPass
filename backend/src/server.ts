import dotenv from "dotenv";
dotenv.config();

import { buildApp } from "./app";

async function start(): Promise<void> {
  const app = await buildApp();

  const port = Number(process.env.PORT) || 4000;
  const host = process.env.HOST ?? "0.0.0.0";

  try {
    await app.listen({ port, host });
    console.log(`\n🚀 VirtuPass backend running at http://${host}:${port}`);
    console.log(`   Health: http://localhost:${port}/api/v1/health`);
    console.log(`   Events: http://localhost:${port}/api/v1/events\n`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
