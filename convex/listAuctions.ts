import { query } from "./_generated/server";

export const getLive = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db
      .query("availableCars")

      .take(10);
  },
});
