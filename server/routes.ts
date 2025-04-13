import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // No API routes for client-side only application
  const httpServer = createServer(app);
  return httpServer;
}
