import { Link } from "react-router"

function Button({children, disabled, to, type, onClick}) {
const base = " font-semibold text-sm tracking-wide uppercase transition-colors duration-300 bg-blue-400 rounded-lg text-stone-800 hover:bg-blue-400 focus:bg-blue-400 focus:ring focus:ring-offset-2 focus:ring-blue-400 focus:outline-none  disabled:cursor-not-allowed"

const styles = {
  primary: base + ' px-4 py-3 md:px-6 md:py-4',

  small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',

  round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',

  secondary: 'font-semibold px-4 py-2.5 md:px-6 md:py-3.5 text-sm tracking-wide uppercase transition-colors border-2 border-stone-300 duration-300 bg-transparent rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring-offset-2 focus:ring-stone-200 focus:outline-none disabled:cursor-not-allowed'
}

  if(to) return (
    <Link className={styles[type]} to={to}>{children}</Link>
  )

  if(onClick) return (
    <button onClick={onClick} className={styles[type]}>{children}</button>
  )


  return (
    <button disabled={disabled} className={styles[type]}>{children}</button>
  )
}

export default Button

