import * as React from 'react';
import UsersView from '../../views/UsersView';
import { users } from '../../constant/users';
import { useAppContext } from '../../context/app';

export default function Users() {
  const { setUser } = useAppContext();

  return (
    <UsersView users={users} actionSelectUserId={setUser} />
  );
}
