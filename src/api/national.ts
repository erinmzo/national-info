import axios from "axios";
import { NationalInfosProps } from "../types/nationalTypes";

const BASE_URL = "https://restcountries.com/v3.1/all";

export async function getNationalInfo(): Promise<NationalInfosProps[]> {
  const { data } = await axios.get(BASE_URL);
  return data;
}
