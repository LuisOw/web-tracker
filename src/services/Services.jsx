const baseUrl = "https://tcc-cco-tracker.herokuapp.com";

export const httpFetch = async (endpoint, token) => {
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const httpFetchWithBody = async (endpoint, method, body, header) => {
  console.log("fetch body " + JSON.stringify(body));
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: method,
    headers: { ...header },
    body: JSON.stringify(body),
  });
  if (method.toUpperCase() === "POST" || method.toUpperCase() === "PATCH") {
    const data = await response.json();
    return data;
  }
};
