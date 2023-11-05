import GithubIcon from '../../public/github-icon.svg';
import TwitterIcon from '../../public/twitter-color-svgrepo-com.svg';
import InstagramIcon from '../../public/instagram-1-svgrepo-com.svg';

const iconStyles = {
    width: '32px',
    height: '32px',
};

const ContactSection = () => {
    return (
        <section
            id='contact'
            className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
        >
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let`&apos;s Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {' '}
                    I&apos;m currently looking for new opportunities, my inbox
                    is always open. Whether you have a question or just want to
                    say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <a href='https://github.com/Youssefxcod'>
                        <img
                            src={GithubIcon}
                            alt='Github Icon'
                            className='icon'
                            style={iconStyles}
                        />
                    </a>
                    <a href='https://twitter.com/Youssefbagh4097'>
                        <img
                            src={TwitterIcon}
                            alt='Twitter Icon'
                            className='icon'
                            style={iconStyles}
                        />
                    </a>
                    <a href='https://www.instagram.com/youssef_baghr/'>
                        <img
                            src={InstagramIcon}
                            alt='Instagram Icon'
                            className='icon'
                            style={iconStyles}
                        />
                    </a>
                </div>
                <div className='contact-options mt-4'>
                    <a href='mailto:youssefbaghrous1@gmail.com'>
                        Send an Email
                    </a>
                </div>
                <div className='contact-options mt-4'>
                    <a href='https://wa.me/+212693035625'>
                        Message on WhatsApp
                    </a>
                </div>
            </div>
            <div className='rounded-full h-80 w-80 relative'>
                <img
                    src='/images/contact.png'
                    alt='Contact Image'
                    className='rounded-full'
                    width={200}
                    height={200}
                />
            </div>
        </section>
    );
};

export default ContactSection;
