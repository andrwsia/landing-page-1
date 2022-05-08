import Image from 'next/image'
import Link from 'next/link'

export default function Subscriptions() {
    return (
        <section id='subscriptions-section' className='subscriptions subscriptions-section'>
            <div className="subscriptions__container container">
                <div className="subscriptions__row row">
                    <div className='subscriptions__col col-sm-12'>
                        <h1>Subscribe to Unlimited Gaming</h1>
                        <p>Choose a one, three or 12-month recurring payment plan</p>
                    </div>
                </div>
                <div className='subscriptions__row-2 row'>
                    <div className='subscriptions__plan-container col-md-4'>
                        <div className='subscriptions__plan'>
                            <p className='subscriptions__months'><span>12</span>Months</p>
                            <p className='subscriptions__details'><span>$59.99</span> every 12 months</p>
                            <Link href="/" className="subscriptions__button">Add to Cart</Link>
                        </div>
                    </div>
                    <div className='subscriptions__plan-container col-md-4'>
                        <div className='subscriptions__plan'>
                            <p className='subscriptions__months'><span>3</span>Months</p>
                            <p className='subscriptions__details'><span>$24.99</span> every 3 months</p>
                            <Link href="/" className="subscriptions__button">Add to Cart</Link>
                        </div>
                    </div>
                    <div className='subscriptions__plan-container col-md-4'>
                        <div className='subscriptions__plan'>
                        <p className='subscriptions__months'><span>1</span>Months</p>
                            <p className='subscriptions__details'><span>$9.99</span> every 1 month</p>
                            <Link href="/" className="subscriptions__button">Add to Cart</Link>
                        </div>
                    </div>
                </div>
                <div className="subscriptions__row row">
                    <div className='subscriptions__col col-sm-12'>
                        <p>Subscription continues until cancelled. See <Link href="/" className="footer__link">Terms</Link> for details of how to cancel.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}