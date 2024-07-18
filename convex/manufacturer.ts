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
    const result = await ctx.db.query("manufacturer").order("desc").take(10);
    const result2 = await ctx.db.query("manufacturer").collect();

    const mix = result.concat(result2);
    return mix;
  },
});
