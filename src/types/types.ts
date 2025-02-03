export interface ICountries {
  name: string;
  code: string;
  emoji: string;
  capital: string;
  currency: string;
}

export interface IDetail {
  name: string;
  code: string;
  emoji: string;
  capital: string;
  currency: string;
  phone?: string;
  subdivisions?: {
    name: string;
  }[];
  languages: {
    name: string;
    native: string;
    code: string;
    rtl: boolean;
  }[];
  continent: {
    code: string;
    name: string;
    countries: ICountries[];
  };
  states: {
    code: string;
    name: string;
  }[];
}