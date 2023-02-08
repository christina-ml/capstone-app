// dependencies
const express = require('express');
const signup = express.Router();

// more dependencies
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

// Configuration
// const app = express();

// bodyParser - Middleware
signup.use(bodyParser.urlencoded({extended: true}));

// Static folder
signup.use(express.static(path.join(__dirname, './../public')));

// Signup - Route
// when we submit the html form, it goes to this route
signup.post('/', (req, res) => {
     // take variables out of req.body
     const { firstName, lastName, email } = req.body;
   
     // make sure fields are filled
     if (!firstName || !lastName || !email){
         // redirect user to our fail page
         res.redirect('./../signup/fail.html');
         return;
     }
 
     // Construct req data (the data we send with the request)
     // go to https://us11.admin.mailchimp.com/lists/settings/merge-tags?id=726178 go to Merge tags
     // `email` comes from req.body
     // can't send it as an object, needs to be a string => using json.stringify
     const data = {
         members: [
             {
                 email_address: email,
                 status: 'subscribed',
                 merge_fields: {
                     FNAME: firstName,
                     LNAME: lastName
                 }
             }
         ]
     }
 
     // send a stringified version of this `data`
     const postData = JSON.stringify(data);
 
     // make a request to the `mailchimp api` with a request module
     // need to make a POST request to /lists, and then /id
     // api reference gives lots of endpoints, but what we want is lists
     // Replace <dc> with your datacenter ("us14", etc.) - to what you have on your mailchimp. I have `us11`
     // go to https://us11.admin.mailchimp.com/lists/settings?id=726178 and scroll to bottom of the page and copy the `unique id for audience...` and put after /lists/
     // Go to Extras -> Api Keys https://us11.admin.mailchimp.com/account/api/ and copy the API key
     // Authorization: a string before the api key, we'll put "auth" and then paste the API key
     const options = {
         url: 'https://us11.api.mailchimp.com/3.0/lists/f34ab44ac8',
         method: 'POST',
         headers: {
             Authorization: 'auth e34ae90c09d39392896fa6749f9de740-us11'
         },
         body: postData
     };
 
     // don't call the `response` variable `res` because it will conflict with the `res` we have earlier
     request(options, (error, response, body) => {
         if (error){
             res.redirect('./../signup/fail.html');
         } else {
             if (response.statusCode === 200){
                 res.redirect('./../signup/success.html');
             } else {
                 res.redirect('./../signup/fail.html');
             }
         }
     });
});

module.exports = signup;