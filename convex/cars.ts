import { v } from "convex/values";
import { api, internal } from "./_generated/api";
import {
  action,
  internalAction,
  internalMutation,
  mutation,
  query,
} from "./_generated/server";

export const getCar = action({
  args: { vin: v.string() },
  handler: async (ctx, args) => {
    let responese;
    try {
      const response = await fetch(`https:/myride.bg/api/carByVin/${args.vin}`);
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error);
      }
      responese = result;
    } catch (error) {
      console.error(error);
    }

    const data = await ctx.runMutation(internal.cars.updateCar, {
      result: responese,
    });
  },
});

export const updateCar = internalMutation({
  args: { result: v.any() },
  handler: async (ctx, args) => {
    const resultData = args.result?.data;
    if (!resultData) {
      throw new Error("No result data");
    }
    const lastLot = resultData.lots?.[resultData.lots.length - 1];
    const task = await ctx.db.insert("cars", {
      body_type: {
        id: resultData.body_type?.id || null,
        name: resultData.body_type?.name || "",
      },
      color: {
        id: resultData.color?.id || null,
        name: resultData.color?.name || "",
      },
      cylinders: resultData.cylinders || 0,
      drive_wheel: {
        id: resultData.drive_wheel?.id || null,
        name: resultData.drive_wheel?.name || "",
      },
      engine: {
        id: resultData.engine?.id || null,
        name: resultData.engine?.name || "",
      },
      fuel: {
        id: resultData.fuel?.id || null,
        name: resultData.fuel?.name || "",
      },
      generation: resultData.generation || "",
      id: resultData.id || null,
      lots: {
        actual_cash_value: lastLot.actual_cash_value || 0,
        airbags: lastLot.airbags || 0,
        bid: lastLot.bid || 0,
        buy_now: lastLot.buy_now || 0,
        clean_wholesale_price: lastLot.clean_wholesale_price || 0,
        condition: {
          id: lastLot.condition?.id || null,
          name: lastLot.condition?.name || "",
        },
        created_at: lastLot.created_at || "",
        damage: {
          main: {
            id: lastLot.damage?.main?.id || null,
            name: lastLot.damage?.main?.name || "",
          },
          second: {
            id: lastLot.damage?.second?.id || null,
            name: lastLot.damage?.second?.name || "",
          },
        },
        detailed_title: {
          code: lastLot.detailed_title?.code || "",
          id: lastLot.detailed_title?.id || null,
          name: lastLot.detailed_title?.name || "",
        },
        domain: {
          id: lastLot.domain?.id || null,
          name: lastLot.domain?.name || "",
        },
        estimate_repair_price: lastLot.estimate_repair_price || 0,
        external_id: lastLot.external_id || "",
        id: lastLot.id || null,
        images: {
          big: {
            url: lastLot.images?.big || "",
          },
          exterior: lastLot.images?.exterior || [],
          external_panorama_url: lastLot.images?.external_panorama_url || "",
          id: lastLot.images?.id || null,
          interior: lastLot.images?.interior || [],
          normal: {
            url: lastLot.images?.normal || "",
          },
          small: {
            url: lastLot.images?.small || "",
          },
          video: lastLot.images?.video || "",
          video_youtube_id: lastLot.images?.video_youtube_id || "",
        },
        keys_available: lastLot.keys_available || false,
        location: {
          city: {
            id: lastLot.location?.city?.id || null,
            name: lastLot.location?.city?.name || "",
          },
          country: {
            iso: lastLot.location?.country?.iso || "",
            name: lastLot.location?.country?.name || "",
          },
          is_offsite: lastLot.location?.is_offsite || false,
          latitude: lastLot.location?.latitude || 0,
          location: {
            id: lastLot.location?.location?.id || null,
            name: lastLot.location?.location?.name || "",
          },
          longitude: lastLot.location?.longitude || 0,
          postal_code: lastLot.location?.postal_code || "",
          raw: lastLot.location?.raw || "",
          state: {
            code: lastLot.location?.state?.code || "",
            id: lastLot.location?.state?.id || null,
            name: lastLot.location?.state?.name || "",
          },
        },
        lot: lastLot.lot || "",
        odometer: {
          km: lastLot.odometer?.km || 0,
          mi: lastLot.odometer?.mi || 0,
          status_id: lastLot.odometer?.status_id || null,
        },
        pre_accident_price: lastLot.pre_accident_price || 0,
        sale_date: lastLot.sale_date || "",
        seller: lastLot.seller || "",
        selling_branch: {
          domain_id: lastLot.selling_branch?.domain_id || null,
          id: lastLot.selling_branch?.id || null,
          link: lastLot.selling_branch?.link || "",
          name: lastLot.selling_branch?.name || "",
          number: lastLot.selling_branch?.number || 0,
        },
        status: lastLot.status || "",
        title: {
          code: lastLot.title?.code || "",
          id: lastLot.title?.id || null,
          name: lastLot.title?.name || "",
        },
        updated_at: lastLot.updated_at || "",
      },
      manufacturer: {
        id: resultData.manufacturer?.id || null,
        name: resultData.manufacturer?.name || "",
      },
      model: {
        id: resultData.model?.id || null,
        manufacturer_id: resultData.model?.manufacturer_id || null,
        name: resultData.model?.name || "",
      },
      title: resultData.title || "",
      transmission: {
        id: resultData.transmission?.id || null,
        name: resultData.transmission?.name || "",
      },
      vehicle_type: {
        id: resultData.vehicle_type?.id || null,
        name: resultData.vehicle_type?.name || "",
      },
      vin: resultData.vin || "",
      year: resultData.year || 0,
    });
  },
});

export const getAllCars = query({
  args: {},
  handler: async (ctx) => {
    const cars = await ctx.db.query("cars").take(100);
    return cars;
  },
});
