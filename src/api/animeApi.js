const url = "http://127.0.0.1:5000/animes";

export const fetchSpotlightAnimeMethod = async () => {
  try {
    const response = await fetch(`${url}/spotlight`);
    const data = await response.json();

    return data?.data;
  } catch (err) {
    throw new Error("Something went wrong!");
  }
};

export const fetchSingleAnimeMethod = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();

    return data?.data;
  } catch (err) {
    throw new Error("Something went wrong!");
  }
};
