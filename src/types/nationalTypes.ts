export type CountryAllInfo = {
  name: {
    common: string;
    official: string;
    nativeName: {
      fra: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: false;
  status: string;
  unMember: false;
  currencies: {
    XPF: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    fra: string;
  };
  translations: {
    ara: {
      official: string;
      common: string;
    };
    bre: {
      official: string;
      common: string;
    };
    ces: {
      official: string;
      common: string;
    };
    cym: {
      official: string;
      common: string;
    };
    deu: {
      official: string;
      common: string;
    };
    est: {
      official: string;
      common: string;
    };
    fin: {
      official: string;
      common: string;
    };
    fra: {
      official: string;
      common: string;
    };
    hrv: {
      official: string;
      common: string;
    };
    hun: {
      official: string;
      common: string;
    };
    ita: {
      official: string;
      common: string;
    };
    jpn: {
      official: string;
      common: string;
    };
    kor: {
      official: string;
      common: string;
    };
    nld: {
      official: string;
      common: string;
    };
    per: {
      official: string;
      common: string;
    };
    pol: {
      official: string;
      common: string;
    };
    por: {
      official: string;
      common: string;
    };
    rus: {
      official: string;
      common: string;
    };
    slk: {
      official: string;
      common: string;
    };
    spa: {
      official: string;
      common: string;
    };
    srp: {
      official: string;
      common: string;
    };
    swe: {
      official: string;
      common: string;
    };
    tur: {
      official: string;
      common: string;
    };
    urd: {
      official: string;
      common: string;
    };
    zho: {
      official: string;
      common: string;
    };
  };
  latlng: number[];
  landlocked: boolean;
  area: 142;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: 11750;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {};
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
};

export type IsLike = {
  isLike: boolean;
  id: string;
};

export type AllInfoPlusIsLike = CountryAllInfo & IsLike;
