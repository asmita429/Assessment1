import React, {useState, useEffect} from 'react';
import RootNav from '../../navigation/RootNav/RootNav';
import {SplashScreen} from '../../screen/index';

const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return <>{loading ? <SplashScreen /> : <RootNav />}</>;
};

export default Main;
