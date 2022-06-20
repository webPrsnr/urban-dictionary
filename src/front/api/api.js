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
};
