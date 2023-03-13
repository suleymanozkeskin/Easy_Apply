import axios from 'axios';
import { rapidApiKey, rapidApiHost } from '../../config';

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {query: 'Python developer in Germany', num_pages: '1'},
  headers: {
    'X-RapidAPI-Key': rapidApiKey, // get this from config.ts file. In case you do not have it, you can get it from rapidapi.com
    'X-RapidAPI-Host': rapidApiHost,
  },
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

// to run this file, use the command: ts-node server.ts





// EGE READ MY THOUGHTS BELOW:


// Implementation , thoughts and challenges:

//  so when we run the api , we get a response like above with many more of it. The issue is api itself does not work so well with keyword ,
//  For instance if the keywords are "python,typescript" instead of looking for jobs that has at least one of this keywords, 
//  it looks for jobs that have of them at the same time. Therefore we will allow user to request a number requests that has the keywords given by user. 
//  Later on for each user we will add this jobs from api's response to our database with for user who made the request.
//  To eliminate duplicate entries we will use the following column to be unique:  "job_google_link".
//  For instance , assume that user will apply for 100 jobs with 4 different searches. 
//  In each search user will give keywords either as something from job description or job title.
//  We will make 4 requests to api and store the response in our database. 
//  Then we will select 100 jobs and send the job_google_link to user for every job we will apply for.
//  The number 100 is just an example, we can make it 50 or 200 or 500 based on user's request , each will have a different price. 
//  Depending on the number of jobs available for the keywords given by user, 
//  we will adjust the price accordingly and prompt user to approve the payment for the number of applications we will make.
//  Send a bill to user's email upon successful payment. In the bill we will show the number of jobs we will apply for and the price.
//  In case of we fail to comply our tasks , we will send an explanatory message to user's email and refund the payment.
//  Once user approves the payment, we will start application process for the jobs we selected.
//  We will use our built in automated application process to apply for the jobs.
//  Once those jobs are applied for, we will send a pdf to user's email that has the job_google_link as well as the job title and the job description.
//  This way user can later on check the applied jobs when they receive an email from the companies they applied for.

//  In order to make this work , we will face several challenges.
//  First of all we will need to make a request to api and store the response in our database with respect to the user who made the request.
//  once we we reach the limit of requests we will stop making requests and send the jobs to application bot. 
//  We will need to make sure that we do not send the same job to application bot more than once for the same user.
//  As application bot will apply for the jobs, we will need to update the status of the job in our database as applied , failed or not applied.
//  Not every job application will be successful, 
//  some might fail however we will try to minimize the number of failed applications as it leads to bad reputation and economic loss.
//  We might have to use an event bus to communicate between the job search api , application bot, our database , user and payment processor.
//  This way we can make sure in case of failure at any stage, our system will be able handle it and take appropriate action.
//  In order to reduce database size and cost, we will need to delete the jobs for the user after a certain period of time.(maybe a week).
//  User will be notified of such deletion and in case they want to make further more applications, 
//  They will be warned that our application bot might apply for the same jobs again. Depending on the cost , we can charge user to not to delete the jobs
//  In case of further usage of our service, we will need to make sure that we do not apply for the same jobs again.


//  As we will deal with structured data, we will use a relational database to store the data. Postgres is our choice.





