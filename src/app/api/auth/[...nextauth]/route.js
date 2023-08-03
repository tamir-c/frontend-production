import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { User } from "@models/User";
import { connectToDatabase } from "@db/db";

// https://next-auth.js.org/getting-started/example

const handler = NextAuth({
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async signIn(user) {
      try {
        await connectToDatabase();
        const { profile } = user;
        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          await User.create({
            name: profile.name,
            email: profile.email,
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log("signIn error", error);
        console.error(error);
        return false;
      }
    },
    async session({ session }) {
      try {
        // await connectToDatabase();
        const user = await User.findOne({ email: session.user.email });
        session.user.id = user._id;
        return session;
      } catch (error) {
        console.log("session error", error);
        return session;
      }
    },
  },
});

export { handler as GET, handler as POST };
