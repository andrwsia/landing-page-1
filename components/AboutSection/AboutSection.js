import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <section id='about-section' className='about-section'>
            <div className='about__container container'>
                <div className='about__row row'>
                    <div className='about__img col-sm-6'>
                        <div className='img__container'>
                            <Image src="/vg-photo.png" alt="pic" width={375} height={375}/>
                        </div>
                    </div>
                    <div className='about__info col-sm-6'>
                        <div className='about__title'>
                            <h1>Play all of your favorite games</h1>
                        </div>
                        <div className='about__context'>
                            <p>
                                3 wolf moon man bun authentic copper mug normcore microdosing 
                                direct trade chicharrones freegan art party vexillologist enamel 
                                pin typewriter pabst. Fashion axe PBR&B biodiesel trust fund portland. 
                                Offal lumbersexual irony hell of la croix. YOLO chartreuse dreamcatcher 
                                you probably haven't heard of them kickstarter narwhal paleo poke echo park.
                            </p>
                        </div>
                        <div className='about__button'>
                            <a href="/" className="abt__button">Explore</a>
                        </div>
                    </div>
                </div>
                <div className='about__row-2 row'>
                <div className='about__img-2 col-sm-6 order-sm-2'>
                        <div className='img__container-2'>
                            <Image src="/alvaro-reyes-vg.jpg" alt="pic" width={375} height={375}/>
                        </div>
                    </div>
                    <div className='about__info-2 col-sm-6 order-sm-1'>
                        <div className='about__title-2'>
                            <h1>Stream or Download</h1>
                        </div>
                        <div className='about__context-2'>
                            <p>
                                3 wolf moon man bun authentic copper mug normcore microdosing 
                                direct trade chicharrones freegan art party vexillologist enamel 
                                pin typewriter pabst. Fashion axe PBR&B biodiesel trust fund portland. 
                                Offal lumbersexual irony hell of la croix. YOLO chartreuse dreamcatcher 
                                you probably haven't heard of them kickstarter narwhal paleo poke echo park.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}