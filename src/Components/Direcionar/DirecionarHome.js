import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Assets/Loading';

function DirecionarHome() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home/1');
  }, [navigate]);

  return <Loading />;
}

export default DirecionarHome;
