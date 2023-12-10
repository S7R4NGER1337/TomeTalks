const baseUrl = "http://localhost:3030/data/";

export async function get(url) {
  const response = await fetch(baseUrl + url);

  return await response.json();
}

export async function post(url, data) {
  const result = await fetch(baseUrl + url, options);

  const options = {
    method: "POST",
    data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const userId = localStorage.getItem("userId");

  if (userId) {
    options['X-Authorization'] = userId
  }

  return result
}
