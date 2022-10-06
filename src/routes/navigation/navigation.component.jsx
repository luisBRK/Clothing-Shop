import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <CrownLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to={'/shop'}>Shop</NavLink>

          {currentUser ? (
            <NavLink
              as='span'
              onClick={signOutUser}
            >
              Sign out
            </NavLink>
          ) : (
            <NavLink to={'/auth'}>Sign in</NavLink>
          )}

          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />

      <ToastContainer />
    </Fragment>
  );
};
export default Navigation;
