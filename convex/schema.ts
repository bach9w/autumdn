import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  bodytype: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  cars: defineTable({
    id: v.float64(),
    year: v.float64(),
    title: v.string(),
    vin: v.string(),
    cylinders: v.float64(),
    created_at: v.string(),
    updated_at: v.string(),
    generation: v.optional(v.any()),
    manufacturer_id: v.float64(),
    model_id: v.float64(),
    body_type_id: v.float64(),
    color_id: v.float64(),
    engine_id: v.float64(),
    transmission_id: v.float64(),
    drive_wheel_id: v.float64(),
    vehicle_type_id: v.float64(),
    fuel_id: v.float64(),
    lots: v.array(
      v.object({
        id: v.float64(),
        lot: v.string(),
        domain_id: v.float64(),
        odometer: v.object({
          km: v.float64(),
          mi: v.float64(),
          status_id: v.float64(),
        }),
        clean_wholesale_price: v.float64(),
        sale_date: v.string(),
        bid: v.float64(),
        buy_now: v.float64(),
        status_id: v.float64(),
        title_id: v.float64(),
        detailed_title_id: v.float64(),
        damage: v.object({
          main_id: v.float64(),
          second_id: v.float64(),
        }),
        keys_available: v.boolean(),
        condition_id: v.float64(),
        images: v.object({
          id: v.float64(),
          small: v.array(v.string()),
          normal: v.array(v.string()),
          big: v.array(v.string()),
        }),
        location: v.object({
          country_id: v.float64(),
          state_id: v.float64(),
          city_id: v.float64(),
          location_id: v.float64(),
          latitude: v.float64(),
          longitude: v.float64(),
          postal_code: v.string(),
          is_offsite: v.optional(v.boolean()),
          raw: v.optional(v.string()),
        }),
        selling_branch_id: v.float64(),
        created_at: v.string(),
        updated_at: v.string(),
      }),
    ),
  }),
  color: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  engine: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  manufacturer: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  model: defineTable({
    id: v.float64(),
    manufacturer_id: v.float64(),
    name: v.string(),
  }),
  transmission: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  drive_wheel: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  vehicle_type: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  fuel: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  domain: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  odometer_status: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  lot_status: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  title: defineTable({
    id: v.float64(),
    code: v.optional(v.string()),
    name: v.string(),
  }),
  damage: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  condition: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  location: defineTable({
    id: v.float64(),
    country_id: v.float64(),
    state_id: v.float64(),
    city_id: v.float64(),
    name: v.string(),
    latitude: v.float64(),
    longitude: v.float64(),
    postal_code: v.string(),
    is_offsite: v.optional(v.boolean()),
    raw: v.optional(v.string()),
  }),
  country: defineTable({
    id: v.float64(),
    iso: v.string(),
    name: v.string(),
  }),
  state: defineTable({
    id: v.float64(),
    code: v.string(),
    name: v.string(),
  }),
  city: defineTable({
    id: v.float64(),
    name: v.string(),
  }),
  selling_branch: defineTable({
    id: v.float64(),
    name: v.string(),
    link: v.optional(v.string()),
    number: v.optional(v.string()),
    domain_id: v.float64(),
  }),
});
