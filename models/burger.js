module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burgerName: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};