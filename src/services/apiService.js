const BASE_URL_FOOTBALL = "https://v3.football.api-sports.io";
const BASE_URL_BASKETBALL = "https://v2.nba.api-sports.io";

const getFixtures = async (url, headers = {}) => {
  //helper function to fetch data from apis
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error("Error fetching data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export const getFootballFixtures = async () => {
  //function to get previous results for chelsea fc from the api
  const url = `${BASE_URL_FOOTBALL}/fixtures?&status=FT&season=2022&team=${49}`;

  return getFixtures(url, {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  });
};

export const getBasketballFixtures = async () => {
  //function to get previous results for golden state warriors from the api
  const url = `${BASE_URL_BASKETBALL}/games?&season=2022&team=${11}`;

  return getFixtures(url, {
    "x-rapidapi-host": "https://v2.nba.api-sports.io",
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  });
};
