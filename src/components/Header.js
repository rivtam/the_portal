import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLogon = useSelector(state => state.auth.isLogon);

  const logoffHandler = event => {
    event.preventDefault();
    dispatch(authActions.logoff());
  };

  const logonNav = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoffHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  const logoffNav = (
    <nav>
      <ul>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogon ? logonNav : logoffNav}
    </header>
  );
};

export default Header;
