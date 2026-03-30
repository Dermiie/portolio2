import { Link } from 'react-router';

function Button({
  children,
  disabled,
  to,
  type,
  onClick,
  className,
  href,
  download,
}) {
  const base =
    'font-display border border-primary-900 font-medium flex items-center justify-center tracking-wide transition-colors duration-300 rounded-md hover:text-primary-600 hover:border-primary-600 px-4 focus:bg-primary-600 focus:outline-none  disabled:cursor-not-allowed';

  const styles = {
    noStyle: className,

    primary: base + 'px-4 py-2 md:px-6 md:py-3',

    solid:
      base +
      'px-4 py-2 md:px-6 md:py-3 bg-primary-900 text-primary-200 hover:bg-primary-600 hover:text-primary-900',

    small: base + 'px-3 py-1 md:px-5 md:py-2 text-xs',

    smallSolid:
      base +
      'px-4 py-1 md:px-5 md:py-2 text-xs bg-primary-900 text-primary-200 hover:bg-primary-600 hover:text-primary-900 ',

    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',

    secondary:
      'font-semibold px-4 py-2.5 md:px-6 md:py-3.5 text-sm tracking-wide uppercase transition-colors border-2 border-stone-300 duration-300 bg-transparent rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring-offset-2 focus:ring-stone-200 focus:outline-none disabled:cursor-not-allowed',
  };

  if (href)
    return (
      <a href={href} download={download} className={styles[type]}>
        {children}
      </a>
    );

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
