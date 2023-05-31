import css from './Wrapper.module.css';

export const Wrapper = ({ children }) => {
    return (
        <header className={css.Wrapper}>
            { children }
        </header>
    );
};