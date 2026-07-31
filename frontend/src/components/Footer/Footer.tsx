// import React from 'react';

// const Footer: React.FC = () => {
//     return (
//     <footer>
//         <div className='app-footer'>2026/04/27 Food Recipe Web App</div>
//     </footer>
//     );
// };

// export default Footer;

// src/components/Footer/Footer.tsx
import React from 'react';
import { FooterAccordion } from './FooterAccordion';
import { SOCIAL_LINKS } from './footerData';
import { LuYoutube } from 'react-icons/lu';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-10 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Phần 1: Khối chính (Brand + Links Accordion) */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-12 pb-6 md:pb-10">
          
          {/* Logo + Tagline */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight font-sans">
              Food Recipe
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Delicious recipes for everyday cooking.
            </p>
          </div>

          {/* Các cột Links Accordion */}
          <FooterAccordion />
        </div>

        {/* Phần 2: Thanh đáy (Social Icons + Copyright) */}
        <div className="pt-6 border-t border-gray-100 md:border-none flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Dãy Icon Mạng Xã Hội */}
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-500 hover:text-amber-600 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Bản quyền */}
          <p className="text-xs text-gray-400">
            &copy; 2026 Food Recipe. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

// Tien ich dich
// Tao thu muc fooder


