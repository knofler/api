const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  secrets: {
    jwt: process.env.JWT_SECRET || 'learneverything',
    jwtExp: '100d',
  },
};

export default config;
