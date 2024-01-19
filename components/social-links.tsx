'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-4'>
            <Link href="https://github.com/olivemonk" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
        </div>
    );
};

export default SocialMediaLinks;