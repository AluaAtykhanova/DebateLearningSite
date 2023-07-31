'use client';

import { useSession } from 'next-auth/react';

const AccessToken = () => {
  const { data } = useSession();
  const { accessToken } = data;

  return <div>Access Token: {accessToken}</div>;
};

export default AccessToken;
