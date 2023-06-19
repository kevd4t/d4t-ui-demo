// import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       async authorize (credentials) {
//         const authResponse = await fetch('/users/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(credentials)
//         })

//         if (!authResponse.ok) {
//           return null
//         }

//         const user = await authResponse.json()

//         return user
//       }
//     })
//   ]
// })

import NextAuth, { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'user@gmail.com' },
        password: { label: 'password', type: 'password' }
      },
      async authorize (credentials, req) {
        const res = await fetch('/your/endpoint', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        })

        const user = await res.json()

        if (res.ok && user) {
          return user
        }

        return null
      }
    })
  ],
  callbacks: {
    async jwt (jwtProps) {
      console.log({ jwtProps })
      // token.userRole = 'admin'
      return jwtProps
    }
  }
}

export default NextAuth(authOptions)
