import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "../../../lib/mongodb"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),

}

export default NextAuth(authOptions)