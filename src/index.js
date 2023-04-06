import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import App from './App';

const UnloadPrompt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleUnload = (event) => {
      // Cancel the event as stated by the standard.
      event.preventDefault();

      // Chrome requires returnValue to be set.
      event.returnValue = '';

      // Save the current location in local storage.
      localStorage.setItem('unloadLocation', navigate.location.pathname);
    };

    window.addEventListener('beforeunload', handleUnload);

    // Remove the event listener on cleanup.
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [navigate]);

  return <App />;
};

export default UnloadPrompt;