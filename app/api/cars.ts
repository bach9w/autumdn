export async function fetchAuction() {
  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4",
  };
  const response = await fetch(
    "https://import-motor.com/api/cars?minutes=10&per_page=100&status=3&condition=0",
    {
      headers: headers,
    },
  );

  const result = await response.json();

  return result;
}

interface Filters {
  year: string;
  fuel: string;
}

export async function fetchAuctionFilter(filters: Filters) {
  const fuel = parseInt(filters.fuel);
  const year = parseInt(filters.year) || undefined;
  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4",
  };
  const response = await fetch(
    `https://import-motor.com/api/cars?minutes=10&per_page=30&status=3&condition=0&fuel_type=${fuel}&year=${year}`,
    {
      headers: headers,
    },
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export async function fetchCarByManufacturer(manufacturerId: number) {
  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4",
  };
  const response = await fetch(
    `https://import-motor.com/api/cars?minutes=10&per_page=50&status=3&condition=0&manufacturer_id=${manufacturerId}`,
    {
      headers: headers,
    },
  );

  const result = await response.json();
  return result;
}

export async function fetchManufacturers() {
  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4",
  };
  const response = await fetch("https://import-motor.com/api/manufacturers", {
    headers: headers,
  });

  const result = await response.json();
  return result;
}

export async function fetchCarDetails(vin: string) {
  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4",
  };
  const response = await fetch(`https://carstat.dev/api/search-vin/${vin}`, {
    headers: headers,
  });

  const result = await response.json();
  return result;
}
