import fastify from "fastify";
import { ZodError } from "zod";
import { appRoutes } from "./http/routes";
import { env } from "./env";

export const app = fastify();

app.register(appRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    reply
      .status(400)
      .send({ message: "Validation error", issues: error.format() });
  }

  if (env.NODE_ENV !== "prod") {
    console.error(error);
  } else {
    //TODO: Send error to monitoring service
  }

  return reply.status(500).send({ message: "Internal server error" });
});
