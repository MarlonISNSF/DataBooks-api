import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ssc_item extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtd_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vl_item: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ssc_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_item" },
        ]
      },
      {
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
    ]
  });
  return infod_ssc_item;
  }
}
