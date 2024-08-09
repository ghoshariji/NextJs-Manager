import mongoose from "mongoose";

const mongoDB = "mongodb://localhost:27017/nextJS";

// if (!mongoDB) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConn() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };

//     cached.promise = mongoose.connect(mongoDB, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

export const connDb = async() =>{
    await mongoose.connect(mongoDB)
}
