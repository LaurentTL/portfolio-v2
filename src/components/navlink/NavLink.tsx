import Link from 'next/link'
import styles from './NavLink.modules.scss'

function NavLink({ href, name }) {
    return (
        <Link href={href} passHref>
            <a>{name}</a>
        </Link>
    )
}

export default NavLink