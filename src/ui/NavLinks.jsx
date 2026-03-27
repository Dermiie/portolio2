import { NavLink } from 'react-router';

function NavLinks() {
  return (
    <>
      <li>
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            `hover:text-primary-600 active:text-primary-600 transition-all duration-300 ${isActive ? 'text-primary-600' : ''}`
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to={'/projects'}
          className={({ isActive }) =>
            ` hover:text-primary-600 active:text-primary-600 transition-all duration-300 ${isActive ? 'text-primary-600 ' : ''}`
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            ` hover:text-primary-600 active:text-primary-600 transition-all duration-300 ${isActive ? 'text-primary-600 ' : ''}`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
}

export default NavLinks;
