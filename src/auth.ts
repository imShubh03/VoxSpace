// imports next-auth for authentication handling
import NextAuth from "next-auth";

// imports prisma adapter for integrating next-auth with prisma
import { PrismaAdapter } from "@auth/prisma-adapter";

// imports github provider for oauth authentication
import GitHubProvider from "next-auth/providers/github";

// imports prisma instance for database interaction
import { prisma } from "./lib";

// checks if github client id and client secret are provided
if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    throw new Error('missing github client id or client secret');
}

// initializes next-auth with authentication handlers and configuration
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    
    // sets up prisma as the database adapter
    adapter: PrismaAdapter(prisma),

    // defines authentication providers (github in this case)
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],

    // defines callback functions for session handling
    callbacks: {
        async session({ user, session }) {
            // assigns user id to session if both exist
            if (user && session) {
                session.user.id = user.id;
            }
            return session;
        }
    }
});
