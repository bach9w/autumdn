import { v } from "convex/values";
import { query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

export const getLive = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db
      .query("availableCars")
      .filter((E) => E.eq(E.field("is_sold"), false))
      .take(10);
  },
});

export const getLiveById = query({
  args: {
    id: v.id("availableCars"),
  },
  handler: async (ctx, args) => {
    const part = await ctx.db.get(args.id);
    return part;
  },
});
