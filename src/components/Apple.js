
import '../styles/Apple.css';

function Apple() {

    return (
        <>
            <p>APPLE</p>
            <div className='iphones'>

                <div className='product' style={{
                    backgroundImage: `url(https://www.theiphonewiki.com/w/images/c/c7/IPhone_12_mini.jpg)`
                }}>
                    <p className='iphone-name'>12 Mini</p>
                    <p className='iphone-desc'>
                        Display: 1080 x 2340 px (5.40")<br />
                        Battery: 2,227mAh<br />
                        CPU: T8101 "A14 Bionic"<br />
                        Clock rate: 2.99 GHz<br />
                        RAM: 4GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://www.theiphonewiki.com/w/images/3/3a/IPhone_12.jpg)`
                }}>
                    <p className='iphone-name'>12</p>
                    <p className='iphone-desc'>
                        Display: 1170 x 2532 px (6.10")<br />
                        Battery: 2,815mAh<br />
                        CPU: T8101 "A14 Bionic"<br />
                        Clock rate: 2.99 GHz<br />
                        RAM: 4GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://www.theiphonewiki.com/w/images/c/c0/IPhone_12_Pro.jpg)`
                }}>
                    <p className='iphone-name'>12 Pro</p>
                    <p className='iphone-desc'>
                        Display: 1170 x 2532 px (6.10")<br />
                        Battery: 2,815mAh<br />
                        CPU: T8101 "A14 Bionic"<br />
                        Clock rate: 2.99 GHz<br />
                        RAM: 6GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://www.theiphonewiki.com/w/images/6/60/IPhone_12_Pro_Max.jpg)`
                }}>
                    <p className='iphone-name' style={{
                        fontSize: 40
                    }}>12 Pro Max</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-96%'
                    }}>
                        Display: 1284 x 2778 px (6.70")<br />
                        Battery: 3,687mAh<br />
                        CPU: T8101 "A14 Bionic"<br />
                        Clock rate: 2.99 GHz<br />
                        RAM: 6GB<br />
                    </p>
                </div>

            </div>
        </>
    )
}

export default Apple;