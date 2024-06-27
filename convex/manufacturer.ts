import { v } from "convex/values";
import { query } from "./_generated/server";

export const getManufacturerById = query({
  args: { id: v.any() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("manufacturer")
      .filter((q) => q.eq(q.field("id"), args.id))
      .collect();
  },
});

export const getManufacturers = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("manufacturer").collect();
  },
});
