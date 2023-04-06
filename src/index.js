import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import App from './App';

const UnloadPrompt = () => {
  const history = useHistory();

  useEffect(() => {
    const handleUnload = (event) => {
      // Cancel the event as stated by the standard.
      event.preventDefault();

      // Chrome requires returnValue to be set.
      event.returnValue = '';

      // Save the current location in local storage.
      localStorage.setItem('unloadLocation', history.location.pathname);
    };

    window.addEventListener('beforeunload', handleUnload);

    // Remove the event listener on cleanup.
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [history]);

  return <App />;
};

export default UnloadPrompt;