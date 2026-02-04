declare module "express-session" {
  interface SessionData {
    user?: {
      name: string;
    };
  }
}

declare module "express" {
  interface Request {
    flash(type: string, message?: string): string[];
  }
}
