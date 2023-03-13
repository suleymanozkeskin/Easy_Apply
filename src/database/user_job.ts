import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db';
import { User } from './user';
import { Job } from './job';

export class UserJob extends Model {
  public id!: number;
  public userId!: number;
  public jobId!: number;
  public status!: string;
  public timestamp!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initModel(): void {
    UserJob.init(
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
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        jobId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: Job,
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        status: {
          type: DataTypes.ENUM('applied', 'failed', 'not applied'),
          allowNull: false,
          defaultValue: 'not applied',
        },
        timestamp: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'user_jobs',
        underscored: true,
        timestamps: true,
      },
    );
  }
}
