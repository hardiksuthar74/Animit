const url = "http://127.0.0.1:5000/users";

export const registerUserMethod = async (formData) => {
  try {
    const response = await fetch(`${url}/`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    if (data?.status !== "success") {
      throw new Error("Something went wrong");
    }

    if (data?.status === "success") {
      sessionStorage.setItem("token", data?.token);
    }
    return data?.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const loginUserMethod = async (formData) => {
  try {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    if (data?.status !== "success") {
      throw new Error("Something went wrong");
    }

    if (data?.status === "success") {
      sessionStorage.setItem("token", data?.token);
    }

    return data?.data;
  } catch (error) {
    throw new Error("Please Try again");
  }
};

export const getCurrentUser = async () => {
  if (!sessionStorage.getItem("token")) return null;

  const response = await fetch(`${url}/getMe`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  const data = await response.json();

  return data;
};

export const addEpisodeMethod = async (dataToSend) => {
  if (!sessionStorage.getItem("token")) return null;
  try {
    const response = await fetch(`http://127.0.0.1:5000/app/updateProcess`, {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    if (data?.status !== "success") {
      throw new Error("Something went wrong");
    }

    return data?.data;
  } catch (error) {
    throw new Error("Please Try again");
  }
};

export const addAnimeMethod = async (dataToSend) => {
  if (!sessionStorage.getItem("token")) return null;
  try {
    const response = await fetch(`http://127.0.0.1:5000/app/addAnime`, {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();

    if (data?.status !== "success") {
      throw new Error("Something went wrong");
    }
    return data?.data;
  } catch (error) {
    throw new Error("Please Try again");
  }
};
