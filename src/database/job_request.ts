import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db';
import { User } from './user';

export class JobRequest extends Model {
  public id!: number;
  public userId!: number;
  public keywords!: string;
  public numOfRequests!: number;
  public price!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initModel(): void {
    JobRequest.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        userId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: User,
            key: 'id'
          }
        },
        keywords: {
          type: DataTypes.STRING,
          allowNull: false
        },
        numOfRequests: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false
        },
        price: {
          type: DataTypes.FLOAT.UNSIGNED,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'job_requests',
        timestamps: true,
        underscored: true
      }
    );
  }

  public static associate(): void {
    JobRequest.belongsTo(User, { foreignKey: 'userId' });
  }
}
