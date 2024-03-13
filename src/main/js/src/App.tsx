import Home from './pages/home/Home';

import style from './App.module.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);
function App() {
  return (
    <div className={css('app')}>
      <Home />
    </div>
  );
}

export default App;
