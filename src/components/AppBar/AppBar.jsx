import { Box } from '../Box/Box';
import { NavLink } from 'react-router-dom';
import css from "./AppBar.module.css";

const navItems = [
    { href: "/", text: "Shop" },
    { href: "cart", text: "Shopping cart" }
];

export const AppBar = () => {
    return (
    <>
        <header>
            <nav>
                <Box>
                    {navItems.map(({ href, text }) =>
                        <NavLink
                            className={css.NavItem}
                            style={({ isActive }) => isActive ? { color: '#fa3470' } : { color: '#2c2c2c' }}
                            to={href}
                            key={href}>{text}
                        </NavLink>)}
                </Box>
            </nav>
        </header>
    </>);
};