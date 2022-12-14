import { Sequelize, DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  let likes = sequelize.define(
    "likes",
    {
      like_id: {
        fields: "like_id",
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      review_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "reviews",
          key: "review_id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "likes",
      timestamps: false,
    }
  );
  return likes;
};
