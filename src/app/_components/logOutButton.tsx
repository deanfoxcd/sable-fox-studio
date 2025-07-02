'use client';
import { Button } from 'flowbite-react';
import { logOut } from '../_lib/authActions';
import { redirect } from 'next/navigation';

const LogOutButton: React.FC = function () {
  function handleLogOut() {
    logOut();
    redirect('/');
  }
  return (
    <div>
      <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  );
};

export default LogOutButton;
