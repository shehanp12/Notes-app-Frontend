const config = {
  STRIPE_KEY: "pk_test_51IvyrYGKckd3D8t4Orq29shTxEmkDNiclEkjawBgobwlW2X6TyOP0CnCuF4YmALhLUq0ApzYyrf2C5sDF9wPKTOj00cYvohhq0",
  
    s3: {
      REGION: "ap-south-1",
      BUCKET: "notes-api-prod-serverlessdeploymentbucket-1dedyda5s1idw",
      IDENTITY_POOL_ID: "ap-south-1:b79df574-afee-4556-9785-d1adeb7606d7"
    },
    apiGateway: {
      REGION: "ap-south-1",
      URL: "https://anzcdryphe.execute-api.ap-south-1.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "ap-south-1",
      USER_POOL_ID: "ap-south-1_NmptlLWJM",
      APP_CLIENT_ID: "40kcvcuacq8ntvsnta027b1ts1",
      IDENTITY_POOL_ID: "ap-south-1:b79df574-afee-4556-9785-d1adeb7606d7",
    },
  };
  
  export default config;
