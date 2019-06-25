
module.exports = (sequelize, DataTypes) => {
    const Lirow = sequelize.define('Lirow', {
      description: DataTypes.STRING,
      photoCover: DataTypes.STRING,
      price: DataTypes.FLOAT,
      link: DataTypes.STRING,
      contributors: DataTypes.STRING
    });

    Lirow.associate = function(models) {
      Lirow.belongsTo(models.User, {
        as: 'user',
        foreignkey: 'userId'})
    };

    return Lirow;
  }