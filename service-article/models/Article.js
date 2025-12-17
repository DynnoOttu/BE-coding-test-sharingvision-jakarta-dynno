module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Publish", "Draft", "Thrash"],
        allowNull: false,
        defaultValue: "Draft",
      },
      createdAt: {
        field: "created_date",
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_date",
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "posts",
      timestamps: true,
    }
  );

  return Post;
};
