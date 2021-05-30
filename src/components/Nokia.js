
import '../styles/Apple.css';

function Apple() {

    return (
        <>
            <p>NOKIA</p>
            <div className='iphones'>

                <div className='product' style={{
                    backgroundImage: `url(https://files.mgsm.pl/phones/nokia-x20/nokia-x20-04.jpg)`
                }}>
                    <p className='iphone-name'>X20</p>
                    <p className='iphone-desc'>
                        Display: 1080 x 2400 px (6.67")<br />
                        Battery: 4,470mAh<br />
                        CPU: Qualcomm Snapdragon 480<br />
                        Clock rate: 2.00 GHz<br />
                        Number of cores: 8
                        RAM: 6GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/nokia-x10/nokia-x10-08.jpg)`
                }}>
                    <p className='iphone-name'>X10</p>
                    <p className='iphone-desc'>
                        Display: 1080 x 2400 px (6.67")<br />
                        Battery: 4,470mAh <br />
                        CPU: Qualcomm Snapdragon 480<br />
                        Clock rate: 2.00 GHz<br />
                        Number of cores: 8<br />
                        RAM: 6GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/nokia-g20/nokia-g20-04.jpg)`
                }}>
                    <p className='iphone-name'>G20</p>
                    <p className='iphone-desc'>
                        Display: 720 x 1600 px (6.50")<br />
                        Battery: 5,050mAh<br />
                        CPU: MediaTek Helio G35<br />
                        Clock rate: 2.30 GHz<br />
                        Number of cores: 8<br />
                        RAM: 4GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/nokia-g10/nokia-g10-04.jpg)`
                }}>
                    <p className='iphone-name'>G10</p>
                    <p className='iphone-desc'>
                        Display: 720 x 1600 px (5.52")<br />
                        Battery: 5,050mAh<br />
                        CPU: MediaTek Helio G25<br />
                        Clock rate: 2.00 GHz<br />
                        Number of cores: 8<br />
                        RAM: 4GB<br />
                    </p>
                </div>

            </div>
        </>
    )
}

export default Apple;