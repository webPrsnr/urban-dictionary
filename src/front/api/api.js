const CURRENT_URL = `http://localhost:8080/api/v1/`;

export const API = {
  async delete(query) {
    const response = await fetch(CURRENT_URL + query, { method: "DELETE" });
    const record = await response.json();
    return record;
  },
  async get(query, par) {
    const response = await fetch(CURRENT_URL + query);
    const record = await response.json();
    if (!par) return record.data;
    return {
      records: record.data,
      recordsLength: response.headers.get("x-content"),
    };
  },
  post() {},
  async patch(query, data) {
    const response = await fetch(CURRENT_URL + query, {
      method: "PATCH",
      body: JSON.stringify({
        word_name: data.wordName,
        mean: data.wordMean,
        description: data.wordDescr,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const record = await response.json();
    return record;
  },
};