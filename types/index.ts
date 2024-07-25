import { MouseEventHandler } from "react";

export interface AuctionProps {
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
  generation: null | string;
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
  lots: {
    id: number;
    lot: string;
    domain: {
      name: string;
      id: number;
    };
    external_id: string;
    odometer: {
      km: number;
      mi: number;
      status: {
        name: string;
        id: number;
      };
    };
    estimate_repair_price: null | number;
    pre_accident_price: null | number;
    clean_wholesale_price: null | number;
    actual_cash_value: null | number;
    sale_date: null | string;
    bid: null | number;
    buy_now: null | number;
    status: {
      name: string;
      id: number;
    };
    seller: null | string;
    title: {
      id: number;
      code: null | string;
      name: string;
    };
    detailed_title: {
      id: number;
      code: null | string;
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
    airbags: {
      name: string;
      id: number;
    };
    condition: {
      name: string;
      id: number;
    };
    grade_iaai: null | string;
    images: {
      id: number;
      small: null | string;
      normal: string[];
      big: string[];
      exterior: null | string;
      interior: null | string;
      video: string;
      video_youtube_id: string;
      external_panorama_url: null | string;
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
      is_offsite: boolean;
      raw: string;
    };
    selling_branch: {
      name: string;
      link: string;
      number: number;
      id: number;
      domain_id: number;
    };
    created_at: string;
    updated_at: string;
  }[];
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel_type?: number;
  page?: number;
  sale_date_in_days?: number;
  status?: string;
  genaration?: string;
  from_year?: number;
  to_year?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
