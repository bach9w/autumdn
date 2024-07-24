export type CarType = {
  id: number;
  year: number;
  title: string;
  vin: string;
  manufacturer: {
    id: number;
    name: string;
  };
  model: {
    id: number;
    name: string;
    manufacturer_id: number;
  };
  generation: null;
  body_type: {
    name: string;
    id: number;
  };
  color: {
    name: string;
    id: number;
  };
  engine: {
    id: number;
    name: string;
  };
  transmission: {
    name: string;
    id: number;
  };
  drive_wheel: {
    name: string;
    id: number;
  };
  vehicle_type: {
    name: string;
    id: number;
  };
  fuel: {
    name: string;
    id: number;
  };
  cylinders: number;
  lots: Array<{
    id: number;
    lot: string;
    domain: {
      name: string;
      id: number;
    };
    external_id: string | null;
    odometer: {
      km: number;
      mi: number;
      status: {
        name: string;
        id: number;
      };
    };
    estimate_repair_price: number | null;
    pre_accident_price: number | null;
    clean_wholesale_price: number;
    actual_cash_value: number | null;
    sale_date: string;
    bid: number;
    buy_now: number;
    status: {
      name: string;
      id: number;
    };
    seller: string | null;
    title: {
      id: number;
      code: string | null;
      name: string;
    };
    detailed_title: {
      id: number;
      code: string | null;
      name: string;
    };
    damage: {
      main: {
        id: number;
        name: string;
      };
      second: {
        id: number;
        name: string;
      };
    };
    keys_available: boolean;
    airbags: string | null;
    condition: {
      name: string;
      id: number;
    };
    grade_iaai: string | null;
    images: {
      id: number;
      small: string[];
      normal: string[];
      big: string[];
      exterior: string[] | null;
      interior: string[] | null;
      video: string[] | null;
      video_youtube_id: string | null;
      external_panorama_url: string | null;
    };
    location: {
      country: {
        iso: string;
        name: string;
      };
      state: {
        id: number;
        code: string;
        name: string;
      };
      city: {
        id: number;
        name: string;
      };
      location: {
        id: number;
        name: string;
      };
      latitude: number;
      longitude: number;
      postal_code: string;
      is_offsite: boolean | null;
      raw: string | null;
    };
    selling_branch: {
      name: string;
      link: string | null;
      number: string | null;
      id: number;
      domain_id: number;
    };
    created_at: string;
    updated_at: string;
  }>;
};
