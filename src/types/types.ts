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
  awsRegion?: string;
  phones?: string[];
  phone?: string;
  subdivisions?: {
    emoji: string;
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
    countries: {
      emoji: string;
      name: string;
      capital?: string;
      currencies?: string[];
      code: string;
    }[];
  };
  states: {
    code: string;
    name: string;
  }[];
}