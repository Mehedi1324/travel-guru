import React, { useEffect } from 'react';
import useFirebase from '../Firebase/useFirebase';

const Logout = () => {
  const { user, handleLogout } = useFirebase();

  return (
    <div>
      <span onClick={handleLogout}>
        <button>Log Out</button>{' '}
      </span>
    </div>
  );
};

export default Logout;
