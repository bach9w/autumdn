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
    price: v.number(),
    is_in_stock: v.boolean(),
    inforamtion: v.string(),
    base_image: v.array(
      v.object({
        id: v.optional(v.any()),
        filename: v.optional(v.any()),
        path: v.optional(v.any()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("parts", {
      name: args.name,
      formatted_price: args.price,
      is_in_stock: args.is_in_stock,
      information: args.inforamtion,
      base_image: args.base_image.map((image) => ({
        id: image.id,
        filename: image.filename,
        path: image.path,
      })),
    });
  },
});

export const deletePart = mutation({
  args: {
    id: v.id("parts"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const getPartById = query({
  args: {
    id: v.id("parts"),
  },
  handler: async (ctx, args) => {
    const part = await ctx.db.get(args.id);
    return part;
  },
});

export const updatePart = mutation({
  args: {
    id: v.id("parts"),
    information: v.optional(v.string()),
    is_in_stock: v.optional(v.boolean()),
    price: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      information: args.information,
      is_in_stock: args.is_in_stock,
      formatted_price: args.price,
    });
  },
});
