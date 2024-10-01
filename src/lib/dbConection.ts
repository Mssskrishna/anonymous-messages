import mongoose from "mongoose";

// type ConnectionObject = {
//   isConnected?: number;
// };

// const connection: ConnectionObject = {};

// async function dbConnect(): Promise<void> {
//   if (connection.isConnected) {
//     console.log("db is connected already");
//     return;
//   }
//   try {
//     const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

//     connection.isConnected = db.connections[0].readyState;

//     console.log("DB is connected");
//   } catch (error) {
//     console.log("DB is not connected", error);
//     process.exit(1);
//   }
// }
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("already connected to db");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;

    console.log("db is connectec successfully");
  } catch (error) {
    console.log("database connection failed", error);
    process.exit(1);
  }
}
export default dbConnect;
