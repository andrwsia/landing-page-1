import Image from 'next/image'
import Link from 'next/link'

export default function Collections() {
    return (
        <section id='collection-section' className='collection collection-section'>
            <div className="collection__container container">
                <div className="collection__title-row row">
                    <div className="collection__title col-sm-12">
                        <h1>Hundreds of incredible games on demand</h1>
                        <h2>Get instant access to newly released games</h2>
                    </div>
                </div>
                <div className="collection__games-container">
                    <div className="collection__games-title-row row">
                        <div className="collection__games-info col-sm-12">
                            <p className="collection__games-title">Nintendo</p>
                            <Link href="/" className="collection__button">View More</Link>
                        </div>
                    </div>
                    <div className="collection__games-row row">
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/ns-vg-1.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/ns-vg-2.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/ns-vg-3.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/ns-vg-4.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                    </div>
                </div>
                <div className="collection__games-container">
                    <div className="collection__games-title-row row">
                        <div className="collection__games-info col-sm-12">
                            <p className="collection__games-title">Playstation</p>
                            <Link href="/" className="collection__button">View More</Link>
                        </div>
                    </div>
                    <div className="collection__games-row row">
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/ps-vg-1.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/ps-vg-2.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/ps-vg-3.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/ps-vg-4.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                    </div>
                </div>
                <div className="collection__games-container">
                    <div className="collection__games-title-row row">
                        <div className="collection__games-info col-sm-12">
                            <p className="collection__games-title">Xbox</p>
                            <Link href="/" className="collection__button">View More</Link>
                        </div>
                    </div>
                    <div className="collection__games-row row">
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/xb-vg-1.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/xb-vg-2.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/xb-vg-3.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                        <div className="collection__video-game col-sm-6 col-md-3">
                            <Image src="/xb-vg-4.jpg" alt="pic" width={425} height={425}/>
                            <p className='collection__video-game-title'>Video Game Title</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}