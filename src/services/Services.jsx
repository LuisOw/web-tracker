const baseUrl = "https://55f2-2804-14d-baa2-8ff4-c380-da9c-4f-b199.ngrok.io";

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

export const httpFetchDownloader = (id, token, filename) => {
  fetch(`${baseUrl}/pesquisas/${id}/arquivo`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => resp.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      alert("your file has downloaded!"); //change later
    })
    .catch(() => alert("oh no!"));
};
