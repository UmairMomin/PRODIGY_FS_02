const bcryptjs = require("bcryptjs");

// For Bcrypt password
exports.securePassword = async (password) => {
    try {
      const passwordHash = await bcryptjs.hash(password, 10);
      return passwordHash;
    } catch (error) {
      console.log(error.message);
    }
  };
  