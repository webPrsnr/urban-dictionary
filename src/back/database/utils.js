const db = require("../../../db_init");
const queries = require("./queries");

const limitList = {
  alphab_inc: { order_by: "word_name", flag: "ASC" },
  alphab_dec: { order_by: "word_name", flag: "DESC" },
  date_new: { order_by: "updated_at", flag: "DESC" },
  date_old: { order_by: "updated_at", flag: "ASC" },
};

const dbAll = (sql, values) => {
  return new Promise((res, rej) => {
    db.all(sql, values, (err, rows) => {
      if (err) rej({ status: 500, message: err });
      res(rows);
    });
  });
};

const dbRun = (sql, values) => {
  return new Promise((res, rej) => {
    db.run(sql, values, function (err, rows) {
      if (err) rej({ status: 500, message: err });
      if (this.changes === 0)
        rej({ status: 404, message: "ID does not exist" });
      res(values);
    });
  });
};

const getSorted = (sortFlag) => {
  if (limitList[sortFlag] === undefined)
    return queries.GET_ALL_WORDS_LIMIT_ORDER;
  return queries.GET_ALL_WORDS_LIMIT_ORDER.replace(
    "word_name",
    limitList[sortFlag].order_by
  ).replace("DESC", limitList[sortFlag].flag);
};

class CommonQuery {
  find(param, query) {
    const data = dbAll(query, param);
    return data;
  }

  async create(params, query) {
    const data = await dbRun(query, params);
    return data;
  }
}

module.exports = {
  dbAll,
  dbRun,
  getSorted,
  CommonQuery,
  dbUpdate,
};
