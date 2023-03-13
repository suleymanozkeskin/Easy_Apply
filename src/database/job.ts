import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from './db';

// tree -I 'node_modules|dist'  // get the folder tree



export class Job extends Model {
  public id!: number;
  public employer_name!: string;
  public employer_logo!: string;
  public employer_website!: string;
  public employer_company_type!: string;
  public job_publisher!: string;
  public job_id!: string;
  public job_employment_type!: string;
  public job_title!: string;
  public job_apply_link!: string;
  public job_description!: string;
  public job_is_remote!: boolean;
  public job_posted_at_timestamp!: number;
  public job_posted_at_datetime_utc!: string;
  public job_city!: string;
  public job_state!: string;
  public job_country!: string;
  public job_latitude!: number;
  public job_longitude!: number;
  public job_benefits!: string;
  public job_google_link!: string;
  public job_offer_expiration_datetime_utc!: string;
  public job_offer_expiration_timestamp!: number;
  public job_required_experience!: string;
  public job_required_skills!: string;
  public job_required_education!: string;
  public job_experience_in_place_of_education!: boolean;
  public job_min_salary!: number;
  public job_max_salary!: number;
  public job_salary_currency!: string;
  public job_salary_period!: string;
  public job_highlights!: string;
  public job_job_title!: string;

  public static initModel(): void {
    Job.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        employer_name: DataTypes.STRING,
        employer_logo: DataTypes.STRING,
        employer_website: DataTypes.STRING,
        employer_company_type: DataTypes.STRING,
        job_publisher: DataTypes.STRING,
        job_id: DataTypes.STRING,
        job_employment_type: DataTypes.STRING,
        job_title: DataTypes.STRING,
        job_apply_link: DataTypes.STRING,
        job_description: DataTypes.STRING,
        job_is_remote: DataTypes.BOOLEAN,
        job_posted_at_timestamp: DataTypes.INTEGER.UNSIGNED,
        job_posted_at_datetime_utc: DataTypes.STRING,
        job_city: DataTypes.STRING,
        job_state: DataTypes.STRING,
        job_country: DataTypes.STRING,
        job_latitude: DataTypes.FLOAT,
        job_longitude: DataTypes.FLOAT,
        job_benefits: DataTypes.STRING,
        job_google_link: DataTypes.STRING,
        job_offer_expiration_datetime_utc: DataTypes.STRING,
        job_offer_expiration_timestamp: DataTypes.INTEGER.UNSIGNED,
        job_required_experience: DataTypes.STRING,
        job_required_skills: DataTypes.STRING,
        job_required_education: DataTypes.STRING,
        job_experience_in_place_of_education: DataTypes.BOOLEAN,
        job_min_salary: DataTypes.FLOAT,
        job_max_salary: DataTypes.FLOAT,
        job_salary_currency: DataTypes.STRING,
        job_salary_period: DataTypes.STRING,
        job_highlights: DataTypes.STRING,
        job_job_title: DataTypes.STRING
      },
      {
        sequelize: sequelize as Sequelize,
        tableName: 'jobs',
        timestamps: true,
        underscored: true,
        indexes: [
          {
            unique: true,
            fields: ['job_google_link']
          }
        ]
      }
    );
  }
}



