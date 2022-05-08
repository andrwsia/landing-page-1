import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section id='hero-section' className='hero-section'>
            <div className='hero__container'>
                <div className='hero__side-one'>
                    <Image src="/nikita-kachanovsky-ps4.jpg" alt="pic" layout='fill'/>
                </div>
                <div className='hero__side-two'>
                </div>
                <div className='hero-info__container'>
                    <div className='hero-info__context'>
                        <div className='hero-info__h1'>
                            <h1>Unlimited</h1>
                        </div>
                        <div className='hero-info__h2'>
                            <h2>Gaming</h2>
                        </div>
                        <div className='hero-info__info'>
                            <Link href="/" className="soi__button">Play Now</Link>
                            <Link href="/" className="soi__button">About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}