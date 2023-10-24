// Get countries from API
import { CountryModel } from '../models/CountryModel';

export const getCountries = async (): Promise<CountryModel[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  return countries;
};


