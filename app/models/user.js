module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      rg: DataTypes.STRING,
      adress: DataTypes.STRING,
      photo: DataTypes.STRING,
      password: DataTypes.STRING,
    });

    return User;
  }