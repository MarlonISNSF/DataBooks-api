import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_gab_entrega extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_entrega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_situacao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_situacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_venda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_saida: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_entrega: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_gab_entrega',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_entrega" },
        ]
      },
      {
        name: "id_endereco",
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
      {
        name: "id_venda",
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
    ]
  });
  return infoa_gab_entrega;
  }
}
