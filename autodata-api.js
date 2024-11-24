import axios from "axios";

const autodataAPI = axios.create({
  baseURL: import.meta.env.VITE_AUTODATA_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiKey = import.meta.env.VITE_AUTODATA_API_KEY;
const countryCode = import.meta.env.VITE_AUTODATA_COUNTRY_CODE;
const limit = 100;

export async function getManufacturers() {
  try {
    const response = await autodataAPI.get(
      `/manufacturers?country-code=${countryCode}&limit=${limit}&api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Autodata:", error.response?.data || error.message);
    throw error;
  }
}
