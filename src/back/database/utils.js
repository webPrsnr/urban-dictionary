const db = require("../../../db_init");

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
      res(rows);
    });
  });
};

module.exports = {
  dbAll,
  dbRun,
};
