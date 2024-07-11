
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold uppercase">LEARNIFY</h5>
            <ul>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Services</h5>
            <ul>
              <li><a href="/services/web" className="hover:text-gray-300">Software & Hardware Courses</a></li>
              <li><a href="/services/mobile" className="hover:text-gray-300">Vocational Classes</a></li>
              <li><a href="/services/marketing" className="hover:text-gray-300">Academic Classes</a></li>
              <li><a href="/services/mobile" className="hover:text-gray-300">Hindi & English Typing</a></li>
              <li><a href="/services/marketing" className="hover:text-gray-300">Networking Classes</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Follow Us</h5>
            <div className="flex mt-3">
              <a href="#" className="mr-4 hover:text-gray-300">
                <i className="fab fa-facebook-f"></i> {/* Assume Font Awesome is included */}
              </a>
              <a href="#" className="mr-4 hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Join Our Newsletter</h5>
            <form className="mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full text-black"
              />
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center pt-8 mt-8 border-t border-gray-700">
          <p>© {new Date().getFullYear()} LEARNIFY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
