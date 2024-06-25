import axios from "axios";
import { CountryAllInfo } from "../types/nationalTypes";

const BASE_URL = "https://restcountries.com/v3.1/all";

export async function getNationalInfo(): Promise<CountryAllInfo[]> {
  const { data } = await axios.get(BASE_URL);
  return data;
}
