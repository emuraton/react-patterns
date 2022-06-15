import * as React from 'react';
import Button from '../../components/Button';
import { Context } from '../../context/index';

const ThemedButton = ({ children }) => {
  const contextValue = React.useContext(Context);

  return (
    <Button
      themeColor={contextValue.themeColor}
      onClick={contextValue.updateThemeColor}
    >
      {children}
    </Button>
  );
};

export default ThemedButton;
