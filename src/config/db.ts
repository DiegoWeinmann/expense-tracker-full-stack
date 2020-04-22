import mongoose from 'mongoose';
import colors from 'colors';

colors.enable();

const connectDB = async () => {
  try {
    const mongoUri: string = process.env.MONGO_URI?.toString()!;
    const c = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected ${c.connection.host}`.green.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
};

export default connectDB;
