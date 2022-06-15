import * as React from 'react';
import ThemedButton from './ThemedButton';
import { Context } from '../../context';

const THEME_COLOR = `primary`;

const Usage = () => {
  const [themeColor, setThemeColor] = React.useState(THEME_COLOR);

  const updateThemeColor = () => {
    setThemeColor(themeColor === `primary` ? `secondary` : `primary`);
  };

  return (
    <Context.Provider value={{ themeColor, updateThemeColor }}>
      <Card>
        <List>
          <ThemedButton>Btn</ThemedButton>
        </List>
      </Card>
    </Context.Provider>
  );
};

const Card = ({ children }) => {
  <div>{children}</div>;
};

const List = ({ children }) => {
  <ul>{children}</ul>;
};

export default Usage;
