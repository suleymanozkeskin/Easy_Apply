import { Pool } from 'pg';
import dotenv from 'dotenv';
import { Job } from './job';
import { User } from './user';
import { JobRequest } from './job_request';
import { UserJob } from './user_job';
import { Payment } from './payment';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
});

// const createTable = async () => {
//   try {
//     const client = await pool.connect();
//     await Job.initModel();
//     await Job.sync({ force: true });
//     console.log('Job table created successfully!');
//     client.release();
//   } catch (err) {
//     console.error('Error creating job table: ', err);
//   }
// };

// createTable();

const createTable = async () => {
    try {
      const client = await pool.connect();
      await Job.initModel();
      await Job.sync({ force: true });
      await User.initModel();
      await User.sync({ force: true });
      await JobRequest.initModel();
      await JobRequest.sync({ force: true });
        await UserJob.initModel();
        await UserJob.sync({ force: true });
        await Payment.initModel();
        await Payment.sync({ force: true });
        


      console.log('Tables created successfully!');
      client.release();
    } catch (err) {
      console.error('Error creating tables: ', err);
    }
  };
  
  createTable();


// ts-node src/database/test-table.ts


// table design thoughts:
// - user table
// - job request table
// - job table
// - user job table
// - payment table
