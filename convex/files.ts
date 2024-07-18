import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { addPart } from "./parts";

const storageLink = "https://wandering-bison-612.convex.site";

export const getUrl = query({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {
    const file = await ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("name"), name))
      .order("desc")
      .collect();
    if (file === null) {
      return null;
    }

    return file;
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const attachUploaded = mutation({
  args: {
    name: v.string(),
    manufacturer: v.optional(v.string()),
    model: v.optional(v.string()),
    uploaded: v.array(
      v.object({
        storageId: v.id("_storage"),
        type: v.string(),
      }),
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("files", {
      name: args.name,
      uploaded: args.uploaded,
      manufacturer: args.manufacturer!,
      model: args.model!,
    });
  },
});

export const saveStorageId = mutation({
  // You can customize these as you like
  args: {
    name: v.string(),
    model: v.any(),
    information: v.string(),
    price: v.any(),
    is_in_stock: v.boolean(),
    manufacturer: v.any(),
    uploaded: v.array(
      v.object({
        storageId: v.id("_storage"),
        type: v.optional(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    ctx.db.insert("files", {
      name: args.name,
      model: args.model,
      manufacturer: args.manufacturer,
      uploaded: args.uploaded.map((file) => ({
        storageId: file.storageId,
        type: file.type!,
      })),
    });

    ctx.db.insert("parts", {
      name: args.name,
      information: args.information,
      is_in_stock: args.is_in_stock,
      formatted_price: args.price,

      base_image: args.uploaded.map((image) => ({
        id: image.storageId,
        filename: image.storageId,
        path: `${storageLink}/getImage?storageId=${image.storageId}`,
      })),
    });
  },
});
