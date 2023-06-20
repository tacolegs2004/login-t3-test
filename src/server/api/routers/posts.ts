import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  posts: publicProcedure
    .input(
      z.object({
        header: z.string(),
        body: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        post: `${input.body}`,
      };
    }),
});
