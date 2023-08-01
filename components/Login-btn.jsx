import { useSession, signIn, signOut } from 'next-auth/react';

const LoginBtn = () => {
  const { data: session } = useSession();

  const buttonStyles = {
    backgroundColor: 'blue', // Синий цвет фона кнопки
    color: 'white', // Белый цвет текста на кнопке
    padding: '8px 16px', // Внутренние отступы кнопки
    borderRadius: '4px', // Радиус скругления углов кнопки
    border: 'none', // Убираем границу кнопки
    cursor: 'pointer', // Курсор в виде указателя при наведении на кнопку
  };

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button type="button" onClick={() => signOut()} style={buttonStyles}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <button type="button" onClick={() => signIn()} style={buttonStyles}>Sign in</button>
    </>
  );
};

export default LoginBtn;
