module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: Sequelize.INTEGER,
      rg: Sequelize.INTEGER,
      adress: Sequelize.STRING,
      photo: Sequelize.STRING,
      password: DataTypes.STRING,
    });
  
    return User;
  }