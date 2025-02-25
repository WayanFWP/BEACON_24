import { login } from "@/lib/firebase/service";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        maxAge: 3600 * 24 * 3,
        strategy: 'jwt',
    },
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'email'},
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials) {
                const {email, password} = credentials as {
                    email: string,
                    password: string,
                }

                const user: any = await login({ email, password })
                if(!user) {
                    throw new Error('Invalid credentials');
                }

                return user
            }
        })
    ],
    callbacks: {
        async jwt({token, account, profile, user}: any) {
            if(account?.provider === 'credentials') {
                token.id = user.id
                token.email = user.email
                token.fullname = user.fullname
            }

            return token
        },

        async session({session, token}: any) {
            if('id' in token) {
                session.user.id = token.id
            }
            if('email' in token) {
                session.user.email = token.email
            }
            if('fullname' in token) {
                session.user.fullname = token.fullname
            }

            return session
        }
    },
    pages: {
        signIn: '/login',
    }
}