import '../styles/About.css';

function About() {
    return (
        <div className='about-container'>
            <div className='about-banner'>
                <p className='banner-text'>Who <span style={{ color: '#00ff00' }}>we</span> are?</p>
            </div>
            <p className='about-description'>
                Turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec <br /><br />Ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin
            </p>
        </div>
    )
}

export default About;