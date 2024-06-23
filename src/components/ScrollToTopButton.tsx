import React from 'react';
import { Button } from 'antd';

interface ScrollToTopButtonProps {
  targetId: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button type="primary" onClick={handleClick} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 100 }}>
      Scroll to {targetId}
    </Button>
  );
};

export default ScrollToTopButton;
