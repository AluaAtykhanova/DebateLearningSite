import { useSession } from 'next-auth/react';

const Component = () => {
  const { data } = useSession();
  const { accessToken } = data;

  return <div>Access Token: {accessToken}</div>;
};

export default Component;
