// src/components/Footer/FooterAccordion.tsx
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FOOTER_SECTIONS } from './footerData';

export const FooterAccordion: React.FC = () => {
  // Quản lý Accordion nào đang mở trên Mobile (mặc định đóng)
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="w-full md:w-auto flex flex-col md:flex-row gap-0 md:gap-16">
      {FOOTER_SECTIONS.map((section) => {
        const isOpen = openSection === section.id;

        return (
          <div
            key={section.id}
            className="border-b border-gray-200 md:border-none py-3 md:py-0"
          >
            {/* Tiêu đề: Mobile có thể click để Toggle, Desktop hiển thị tĩnh */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex justify-between items-center text-left text-sm font-semibold text-gray-900 md:cursor-default"
            >
              <span>{section.title}</span>
              {/* Arrow Icon - Chỉ hiện trên Mobile */}
              <RiArrowDropDownLine
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 md:hidden ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Danh sách Links */}
            <ul
              className={`mt-2 space-y-2.5 overflow-hidden transition-all duration-300 md:block ${
                isOpen ? 'max-h-40 opacity-100 py-1' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
              }`}
            >
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};