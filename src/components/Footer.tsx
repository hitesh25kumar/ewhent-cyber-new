import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Cyber Defense', path: '/services/cyber-defense' },
        { label: 'Cyber Research', path: '/services/cyber-research' },
        { label: 'Cyber Operations', path: '/services/cyber-operations' },
        { label: 'Security Audit', path: '/security-audit' },
        { label: 'Consulting', path: '/services/consulting' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'News', path: '/news' },
        { label: 'Webinars', path: '/webinars' },
        { label: 'White Papers', path: '/resources/white-papers' },
        { label: 'Case Studies', path: '/resources/case-studies' },
        { label: 'Blog', path: '/blog' },
        { label: 'Community', path: '/community' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: 'Partners', path: '/partners' },
        { label: 'Contact', path: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: 'https://twitter.com/ewhent' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/company/ewhent' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/ewhent' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link to="/" className="block mb-4">
              <Logo variant="light" />
            </Link>
            <div className="mb-6">
              <p className="text-gray-400 mb-2">Bengaluru Office:</p>
              <p className="text-sm text-gray-400">#2161, 100 Ft Road, 4th "B" Block, Banashankari, 6th Stage, Ganigarapalaya, Bengaluru, KA, IN – 560062</p>
            </div>
            <div className="mb-6">
              <p className="text-gray-400 mb-2">Delhi Office:</p>
              <p className="text-sm text-gray-400">#D3, H4/121, Mahavir Enclave, Palam, New Delhi, India – 110045</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-medium mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
              <Link to="/copyright" className="hover:text-white">Copyright</Link>
              <Link to="/website-policies" className="hover:text-white">Website Policies</Link>
              <Link to="/glossary" className="hover:text-white">Glossaries</Link>
              <Link to="/data-sharing" className="hover:text-white">Data Sharing Guidelines</Link>
              <Link to="/useful-links" className="hover:text-white">Useful Links</Link>
              <Link to="/dnd" className="hover:text-white">DND</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
              <Link to="/news" className="hover:text-white">Latest News</Link>
            </div>
            <div className="text-sm text-gray-400">
              © {currentYear} Ewhent Technologies. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;