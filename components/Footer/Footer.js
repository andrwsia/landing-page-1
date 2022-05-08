import Link from 'next/link'

export default function footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__row row">
                    <div className="footer__col col-sm-3">
                        <div className="footer__sub-container"> 
                            <p>Support</p>
                            <Link href="/" className="footer__link">Support Center</Link>        
                            <Link href="/" className="footer__link">Contact Us</Link>    
                            <Link href="/" className="footer__link">Do not sell my information</Link>
                        </div>
                    </div>
                    <div className="footer__col col-sm-3">
                        <div className="footer__sub-container"> 
                            <p>About</p>
                            <Link href="/" className="footer__link">About Us</Link>             
                            <Link href="/" className="footer__link">Privacy Policy</Link>
                            <Link href="/" className="footer__link">Terms of Use</Link>
                        </div>
                    </div>
                    <div className="footer__col col-sm-3">
                        <div className="footer__sub-container"> 
                            <p>Social Media</p>
                            <Link href="/" className="footer__link"><i className="fa-brands fa-twitter"></i></Link>   
                            <Link href="/" className="footer__link"><i className="fa-brands fa-facebook-f"></i></Link>   
                            <Link href="/" className="footer__link"><i className="fa-brands fa-instagram"></i></Link>
                        </div> 
                    </div>
                </div>
                <div className="footer__row-2 row">
                    <div className="footer__col-2 col-sm-12">
                        <p>&copy; 2022. Unlimited Gaming. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}