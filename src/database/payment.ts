import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db';
import { User } from './user';

export class Payment extends Model {
  public id!: number;
  public userId!: number;
  public amount!: number;
  public status!: string;
  public timestamp!: Date;
  public paymentMethod!: string;

  public static initModel(): void {
    Payment.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: User,
            key: 'id',
          },
        },
        amount: {
          type: DataTypes.FLOAT.UNSIGNED,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING(20),
          allowNull: false,
          defaultValue: 'unpaid',
        },
        timestamp: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        paymentMethod: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'payments',
        timestamps: false,
        underscored: true,
      }
    );
  }
}
