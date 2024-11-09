import { templateConfig } from "../../config/comp2";
import CustomizableCard from "../../components/comp2";
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Page2: React.FC = () => {
    const { comp2 } = templateConfig;
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };
    return (
      <>
        <CustomizableCard 
        header={comp2.header}
        content={comp2.content}
        bgColor={comp2.bgColor}
        textColor={comp2.textColor}
        />
       <button onClick={handleButtonClick}>Go to Page 1</button>

      </>
    );
  };
  
  export default Page2;
  