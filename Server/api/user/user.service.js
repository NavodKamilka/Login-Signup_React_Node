const pool = require("../../config/database");

module.exports = {

  createUser: (data,hashedPassword, callBack) => {
    pool.query(
      `insert into user(user_Name, email, password) 
                values(?,?,?)`,
      [
        data.user_Name,
        data.email,
        hashedPassword,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  
};
