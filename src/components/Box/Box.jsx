import css from './Box.module.css';

export const Box = ({ children }) => {
    return (
        <header className={css.HeaderBox}>
            { children }
        </header>
    );
};