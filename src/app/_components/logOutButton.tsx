'use client';

import { Button } from 'flowbite-react';
import { redirect } from 'next/navigation';

import { logOut } from '../_lib/authActions';
import { customTheme } from '../styles/themes';

const LogOutButton: React.FC = function () {
  function handleLogOut() {
    logOut();
    redirect('/');
  }
  return (
    <div>
      <Button
        onClick={handleLogOut}
        color='alternative'
        theme={customTheme.button}
        pill
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOutButton;
