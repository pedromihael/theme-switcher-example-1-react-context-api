import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';
import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const handleThemeSwitch = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else setTheme(themes.dark);
    console.log(theme);
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme} >
              <TodoList />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>

        <ThemeSwitcher setTheme={handleThemeSwitch} />

      </ThemeContext.Provider>
    </>
  );
}

export default App;
