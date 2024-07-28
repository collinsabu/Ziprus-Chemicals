import { signOut } from 'next-auth/react';

const HeaderSignout = ({ user }) => {
   
  return (
    <header>
      {user && (
        <div className='text-white font-semibold'>
          <span>{user.email}</span>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
    </header>
  );
};

export default HeaderSignout;
