
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-white shadow-2xl sm:mt-10   py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    {/* Logo and Social Links */}
                    <div>
                        <h2 className="text-xl font-bold text-black">Dhash<span className='text-[#e26d5c]'>Electronics</span> </h2>
                        <div className="flex space-x-4 mt-4">
                            <FaFacebookF className="text-xl text-[#000000]" />
                            <FaInstagram className="text-xl text-[#000000]" />
                            <FaTwitter className="text-xl text-[#000000]" />
                            <FaLinkedin className="text-xl text-[#000000]" />
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div className="flex-1 ml-12">
                        <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
                        <p className="text-gray-500 mt-2">Be the first to know about our latest products, exclusive deals, and more.</p>
                        <div className="mt-4 flex">
                            <input type="email" placeholder="Enter your email" className="border border-gray-300 p-2 rounded-l-md focus:outline-none w-full" required/>
                            <button type="submit" className="bg-[#e26d5c] text-white px-4 py-2 rounded-r-md">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Product & Service */}
                    <div>
                        <h4 className="font-semibold text-gray-700">Product & Service</h4>
                        <ul className="mt-4 space-y-2 text-gray-500">
                            <li>Electronics</li>
                            <li>Mobile Phones</li>
                            <li>Computers & Accessories</li>
                            <li>Home Appliances</li>
                            <li>Gaming Consoles</li>
                        </ul>
                    </div>
                    {/* Shop Now */}
                    <div>
                        <h4 className="font-semibold text-gray-700">Shop Now</h4>
                        <ul className="mt-4 space-y-2 text-gray-500">
                            <li>Latest Offers</li>
                            <li>Discounts</li>
                            <li>Best Sellers</li>
                            <li>Student Discounts</li>
                        </ul>
                    </div>
                    {/* Support */}
                    <div>
                        <h4 className="font-semibold text-gray-700">Support</h4>
                        <ul className="mt-4 space-y-2 text-gray-500">
                            <li>Contact Us</li>
                            <li>Email Support</li>
                            <li>Live Chat</li>
                            <li>Phone Support</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    {/* Account */}
                    <div>
                        <h4 className="font-semibold text-gray-700">Account</h4>
                        <ul className="mt-4 space-y-2 text-gray-500">
                            <li>My Account</li>
                            <li>Orders</li>
                            <li>Wishlist</li>
                            <li>Rewards</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500">
                    <div className="flex justify-center space-x-4 text-sm">
                        <span>English</span>
                        <span>Privacy</span>
                        <span>Legal</span>
                    </div>
                    <p className="mt-4">&copy; 2024 DhaashTech. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;