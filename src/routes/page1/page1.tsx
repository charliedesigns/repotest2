import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from "../../components/Banner";
import { templateConfig } from '../../config';


const Page1: React.FC = () => {
  const { banner } = templateConfig;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/page2');
  };

  return (
    <>
      <Banner
        title={banner.title}
        subtitle={banner.subtitle}
        bgColor={banner.bgColor}
        textColor={banner.textColor}
      />
            <button onClick={handleButtonClick}>Go to Page 2</button>

    </>
  );
};

export default Page1;
