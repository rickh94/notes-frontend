const dev = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-python-api-dev-attachmentsbucket-aea8cgqulfwf'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://ufjszng38b.execute-api.us-east-1.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_68b7zG74u',
    APP_CLIENT_ID: '394f6n62v285g4rss9ah21siri',
    IDENTITY_POOL_ID: 'us-east-1:96eea962-52c5-4cd1-968f-ab29210107d5'
  },
  STRIPE_KEY: 'pk_test_jwzRPjVItZaiNGfVlFdouddv00naO2J3Bm'
}

const prod = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-python-api-prod-attachmentsbucket-1o5kf4pdbigpk'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://ujxk2e6n19.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_bV9hi9A2J',
    APP_CLIENT_ID: '1u6ug5cgqitkiktnqtnj01bt7f',
    IDENTITY_POOL_ID: 'us-east-1:1ddc38b7-02a2-4dbb-a32c-bfc96ed34b68'
  },
  STRIPE_KEY: 'pk_test_jwzRPjVItZaiNGfVlFdouddv00naO2J3Bm'
}

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
}
