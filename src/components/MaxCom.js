import '../styles/Apple.css';

function Apple() {

    return (
        <>
            <p>MAXCOM</p>
            <div className='iphones'>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/maxcom-comfort-mm735/maxcom-comfort-mm735-02.jpg)`
                }}>
                    <p className='iphone-name'>Comfort MM735</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 176 x 220 px (2.20")<br />
                        Battery: 1,400mAh<br />
                        CPU: XD<br />
                        Clock rate: XD<br />
                        Number of cores: XD<br />
                        RAM: XD<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/maxcom-classic-mm111/maxcom-classic-mm111-02.jpg)`
                }}>
                    <p className='iphone-name'>Classic MM111</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 128 x 128 px (1.44")<br />
                        Battery: 0,460mAh <br />
                        CPU: XD<br />
                        Clock rate: XD<br />
                        Number of cores: XD<br />
                        RAM: XD<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/maxcom-classic-mm144/maxcom-classic-mm144-02.jpg)`
                }}>
                    <p className='iphone-name'>Classic MM144</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 240 x 320 px (2.40")<br />
                        Battery: 1,000mAh<br />
                        CPU: XD<br />
                        Clock rate: XD<br />
                        Number of cores: XD<br />
                        RAM: XD<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/maxcom-comfort-mm760/maxcom-comfort-mm760-02.jpg)`
                }}>
                    <p className='iphone-name'>Comfort MM760</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 240 x 320 px (2.30")<br />
                        Battery: 0,900mAh<br />
                        CPU: XD<br />
                        Clock rate: XD<br />
                        Number of cores: XD<br />
                        RAM: XD<br />
                    </p>
                </div>

            </div>
        </>
    )
}

export default Apple;