export async function fetchAuction() {
	const headers = {
		"x-api-key": "a48f8f672e29bd479c652f76f100bcf4",
	};
	const response = await fetch(
		"https://import-motor.com/api/cars?minutes=10&status=3&condition=0&per_page=100",
		{
			headers: headers,
		},
	);

	const result = await response.json();

	return result;
}
