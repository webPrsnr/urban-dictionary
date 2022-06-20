const CURRENT_URL = `http://localhost:8080/api/v1/`;

export const API = {
  delete() {},
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
