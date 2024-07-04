import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  bodytype: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  cars: defineTable({
    id: v.float64(),
    year: v.any(),
    title: v.any(),
    vin: v.any(),
    manufacturer: v.optional(
      v.object({
        id: v.any(),
        name: v.any(),
      }),
    ),
    model: v.optional(
      v.object({
        id: v.optional(v.any()) || v.null(),
        name: v.any() || v.null(),
        manufacturer_id: v.any() || v.null(),
      }),
    ),
    generation: v.any(),
    body_type: v.optional(
      v.object({
        name: v.optional(v.any()),
        id: v.optional(v.any()),
      }),
    ),
    color: v.optional(
      v.object({
        name: v.optional(v.any()),
        id: v.optional(v.any()),
      }),
    ),
    engine: v.optional(
      v.object({
        name: v.optional(v.any()),
        id: v.optional(v.any()),
      }),
    ),
    transmission: v.optional(
      v.object({
        name: v.optional(v.any()),
        id: v.optional(v.any()),
      }),
    ),
    drive_wheel: v.object({
      name: v.optional(v.any()),
      id: v.optional(v.any()),
    }),
    vehicle_type: v.object({
      name: v.optional(v.any()),
      id: v.optional(v.any()),
    }),
    fuel: v.object({
      name: v.optional(v.any()),
      id: v.optional(v.any()),
    }),
    cylinders: v.optional(v.any()),

    lots: v.object({
      id: v.optional(v.any()),
      lot: v.optional(v.any()),
      domain: v.object({
        name: v.optional(v.any()),
        id: v.optional(v.any()),
      }),
      external_id: v.optional(v.any()),

      odometer: v.object({
        km: v.optional(v.any()),
        mi: v.optional(v.any()),
        status_id: v.optional(v.any()),
      }),
      estimate_repair_price: v.optional(v.any()),
      pre_accident_price: v.optional(v.any()),
      actual_cash_value: v.optional(v.any()),

      clean_wholesale_price: v.optional(v.any()),
      sale_date: v.optional(v.any()),
      bid: v.optional(v.any()),
      buy_now: v.optional(v.any()),
      status: v.optional(v.any()),
      seller: v.optional(v.any()),
      title: v.object({
        id: v.optional(v.any()),
        name: v.optional(v.any()),
        code: v.optional(v.any()),
      }),
      detailed_title: v.object({
        id: v.optional(v.any()),
        code: v.optional(v.any()),
        name: v.optional(v.any()),
      }),
      damage: v.optional(
        v.object({
          main: v.optional(
            v.object({
              id: v.optional(v.any()),
              name: v.optional(v.any()),
            }),
          ),
          second: v.optional(
            v.object({
              id: v.optional(v.any()) || v.null(),
              name: v.optional(v.any()) || v.null(),
            }),
          ),
        }),
      ),
      keys_available: v.boolean(),
      airbags: v.optional(v.any()),
      condition: v.object({
        id: v.optional(v.any()),
        name: v.optional(v.any()),
      }),
      images: v.object({
        id: v.optional(v.any()),
        small: v.object({
          url: v.optional(v.any()),
        }),
        normal: v.object({
          url: v.optional(v.any()),
        }),
        big: v.object({
          url: v.optional(v.any()),
        }),
        exterior: v.any(),
        interior: v.any(),
        video: v.any(),
        video_youtube_id: v.any(),
        external_panorama_url: v.any(),
      }),

      location: v.object({
        country: v.object({
          iso: v.any(),
          name: v.any(),
        }),
        state: v.object({
          id: v.any(),
          name: v.any(),
          code: v.any(),
        }),
        city: v.object({
          id: v.any(),
          name: v.any(),
        }),
        location: v.object({
          id: v.any(),
          name: v.any(),
        }),
        latitude: v.any(),
        longitude: v.any(),
        postal_code: v.any(),
        is_offsite: v.optional(v.boolean()),
        raw: v.optional(v.any()),
      }),
      selling_branch: v.object({
        name: v.any(),
        link: v.any(),
        number: v.any(),
        id: v.any(),
        domain_id: v.any(),
      }),
      created_at: v.any(),
      updated_at: v.any(),
    }),
  }),
  color: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  engine: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  manufacturer: defineTable({
    id: v.any(),
    name: v.any(),
    image: v.any(),
    cars_qty: v.any(),
  }),
  model: defineTable({
    id: v.any(),
    manufacturer_id: v.any(),
    name: v.any(),
  }),
  transmission: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  drive_wheel: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  vehicle_type: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  fuel: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  domain: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  odometer_status: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  lot_status: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  title: defineTable({
    id: v.any(),
    code: v.optional(v.any()),
    name: v.any(),
  }),
  damage: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  condition: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  location: defineTable({
    id: v.any(),
    country_id: v.any(),
    state_id: v.any(),
    city_id: v.any(),
    name: v.any(),
    latitude: v.any(),
    longitude: v.any(),
    postal_code: v.any(),
    is_offsite: v.optional(v.boolean()),
    raw: v.optional(v.any()),
  }),
  country: defineTable({
    id: v.any(),
    iso: v.any(),
    name: v.any(),
  }),
  state: defineTable({
    id: v.any(),
    code: v.any(),
    name: v.any(),
  }),
  city: defineTable({
    id: v.any(),
    name: v.any(),
  }),
  selling_branch: defineTable({
    id: v.any(),
    name: v.any(),
    link: v.optional(v.any()),
    number: v.optional(v.any()),
    domain_id: v.any(),
  }),
  parts: defineTable({
    price: v.optional(
      v.object({
        amount: v.optional(v.any()),
        formatted: v.optional(v.any()),
        currency: v.optional(v.any()),
        inCurrentCurrency: v.object({
          amount: v.optional(v.any()),
          formatted: v.optional(v.any()),
          currency: v.optional(v.any()),
        }),
      }),
    ),
    special_price: v.optional(v.any()),
    special_price_type: v.optional(v.any()),
    selling_price: v.optional(
      v.object({
        amount: v.optional(v.any()),
        formatted: v.optional(v.any()),
        currency: v.optional(v.any()),
        inCurrentCurrency: v.optional(
          v.object({
            amount: v.optional(v.any()),
            formatted: v.optional(v.any()),
            currency: v.optional(v.any()),
          }),
        ),
      }),
    ),
    special_price_start: v.optional(v.any()),
    special_price_end: v.optional(v.any()),
    id: v.optional(v.any()),
    manage_stock: v.optional(v.any()),
    qty: v.optional(v.any()),
    new_from: v.optional(v.any()),
    new_to: v.optional(v.any()),
    base_image: v.array(
      v.object({
        id: v.optional(v.any()),
        filename: v.optional(v.any()),
        path: v.optional(v.any()),
      }),
    ),

    formatted_price: v.optional(v.any()),
    rating_percent: v.optional(v.any()),
    is_in_stock: v.optional(v.any()),
    is_out_of_stock: v.optional(v.any()),
    is_new: v.optional(v.any()),
    has_percentage_special_price: v.optional(v.any()),
    special_price_percent: v.optional(v.any()),
    name: v.optional(v.any()),
    slug: v.optional(v.any()),
    reviews: v.optional(v.any()),
  }),
  files: defineTable({
    name: v.string(),
    model: v.any(),
    manufacturer: v.any(),

    uploaded: v.array(
      v.object({
        storageId: v.string(),
        type: v.string(),
      }),
    ),
  }),
  availableCars: defineTable({
    vin: v.any(),
    manufacturerId: v.any(),
    modelId: v.any(),
    body_type: v.any(),
    color: v.any(),
    airbags: v.boolean(),
    keys: v.boolean(),
    fuel: v.any(),
    engine: v.any(),
    transmission: v.any(),
    drive_wheel: v.any(),
    km: v.any(),
    images: v.optional(
      v.array(
        v.object({
          url: v.optional(v.any()),
        }),
      ),
    ),
    year: v.any(),
  }),
  users: defineTable({
    tokenIdentifier: v.any(),
    email: v.any(),
    endsOn: v.optional(v.number()),
    subscriptionId: v.optional(v.any()),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_subscriptionId", ["subscriptionId"]),
});
