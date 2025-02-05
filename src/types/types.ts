export interface ICountries {
  name: string;
  code: string;
  emoji: string;
  capital: string;
  currency: string;
  label: string;
  value: string;
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

export interface IProfile {
  avatar_url: string;
  email: string;
  name: string;
  phone: string;
}
