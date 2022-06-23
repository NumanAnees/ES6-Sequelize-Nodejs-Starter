"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Task.associate = function (models) {
    // associations can be defined here
  };
  return Task;
};
