import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db';

export class User extends Model {
  public id!: number;
  public email!: string;
  public username!: string;
  public password!: string;
  public google_id!: string;

  public static initModel(): void {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        google_id: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: 'users',
        timestamps: true,
        underscored: true,
      }
    );
  }
}
