module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Ingredient: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false
    },

  });

  Recipes.associate = models =>
    Recipes.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

  return Recipes;
};
