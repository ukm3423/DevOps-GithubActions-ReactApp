import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
  return (
    <div className="fixed top-0 w-full z-30 bg-gray-800 text-white text-center text-sm py-2">
      <div className="flex justify-center space-x-4">
        {/* Phone link */}
        <a href="tel:+916201033951" className="flex items-center space-x-1 hover:text-gray-300">
          <FontAwesomeIcon icon={faPhone} />
          <span>+91 6201033951</span>
        </a>
        <span>|</span>
        {/* Email link */}
        <a href="mailto:quickcomputer@gmail.com" className="flex items-center space-x-1 hover:text-gray-300">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>learnify@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default TopBar;
