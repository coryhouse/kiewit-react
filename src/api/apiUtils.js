export async function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error("API call failed. " + error);
  // Throw the error so that the caller can handle the error as desired.
  throw error;
}
