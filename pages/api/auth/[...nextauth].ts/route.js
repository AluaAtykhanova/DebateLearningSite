import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Создайте новый объект, чтобы избежать прямого изменения параметра функции.
      const updatedToken = { ...token };

      // Persist the OAuth access_token to the updatedToken right after signin
      if (account) {
        updatedToken.accessToken = account.access_token;
      }

      return updatedToken;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
