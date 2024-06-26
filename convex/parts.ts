import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getParts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("parts").collect();
  },
});

export const addPart = mutation({
  args: {
    name: v.string(),
    base_image: v.object({
      id: v.optional(v.any()),
      filename: v.optional(v.any()),
      path: v.optional(v.any()),
    }),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("parts", {
      name: args.name,
      base_image: args.base_image,
    });
  },
});
