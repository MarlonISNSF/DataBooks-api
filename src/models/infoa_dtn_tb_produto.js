import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_titulo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    nm_produto: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ds_categoria: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    vl_preco: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    id_tamanho: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    img_imagem: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    ds_genero: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    ds_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
      {
        name: "id_tamanho",
        using: "BTREE",
        fields: [
          { name: "id_tamanho" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_produto;
  }
}
