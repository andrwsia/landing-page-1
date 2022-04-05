import Image from 'next/image'

export default function Partners() {
    return (
        <section id='partners-section' className='partners-section'>
            <div className="partners__container container-fluid">
                <div className="partners__row row">
                    <div className="col__partner col-sm-5 col-md-3">
                        <Image src="/nintendo.png" alt="pic" width={100} height={100}/>
                    </div>
                    <div className="col__partner col-sm-5 col-md-3">
                        <Image src="/playstation.png" alt="pic" width={100} height={100}/>
                    </div>
                    <div className="col__partner col-sm-5 col-md-3">
                        <Image src="/xbox.png" alt="pic" width={100} height={100}/>
                    </div>
                    <div className="col__partner col-sm-5 col-md-3">
                        <Image src="/steam.png" alt="pic" width={100} height={100}/>
                    </div>
                </div>
            </div>
        </section>
    );
}