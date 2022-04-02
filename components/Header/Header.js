import Link from 'next/link'

export default function header() {
    return (
        <header className="header">
            {/* MOBILE START*/}
            <ul className="header__mobile-menu-bar">     
                <i className="fa-solid fa-bars"></i>
                <li>
                    <ul className="mobile-menu-bar__sub">
                        <li className="header__collections-link">
                            <a href="/">Home</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">About</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">Collections</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">Subscriptions</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">Sign In</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">Cart</a>
                        </li>
                        
                    </ul>
                </li>
            </ul>
            {/* MOBILE END */}
            <ul className="header__collections-nav">
                <li className="header__collections-link">
                    <Link href="/">Home</Link>
                </li>
                <li className="header__collections-link">
                    <Link href="/">About</Link>
                </li>
                <li className="header__collections-link">
                    <Link href="/">Collections</Link>
                </li>
                <li className="header__collections-link">
                    <Link href="/">Subscriptions</Link>
                </li>
            </ul>
            <ul className="header__logo">
                <li><Link href="/">UG</Link></li>
            </ul>   
            <ul className="header__collections-nav">
                <li className="header__collections-link">
                    <Link href="/">Sign In</Link>
                </li>
                <li className="header__collections-link">
                    <Link href="/">Cart</Link>
                </li>
            </ul>
        </header>
    )
}

//*--Script START--*//



  //*--Script END--*//
