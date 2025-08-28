This is created by git app
Remote url for application: https://ecom-1b-team.netlify.app/

In order to clone and run this repository u'll need to add .env file in ur backend
Include following attributes in ur .env file

#Port to ru  ur application
PORT=XXXX

# MongoDB connection string
MONGO_URI=DB_Connecting_Link

# JWT configuration
JWT_SECRET=Password
JWT_EXPIRES_IN=Expiration time

# Email configuration
EMAIL_USER=Sender's Email
EMAIL_PASS=Email_password
# OTP settings
OTP_EXPIRES_MINUTES=OTP Expiration time

# CORS configuration
CORS_ORIGIN=allowed cors origin
