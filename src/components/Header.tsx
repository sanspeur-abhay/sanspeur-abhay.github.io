import { useState } from 'react';
import viteLogo from '/vite.svg';

type NavItem = {
  label: string;
  items?: string[];
  href?: string;
};

const navigation: NavItem[] = [
  {
    label: 'Products',
    items: ['Features', 'Pricing', 'Resources', 'Solutions'],
  },
  {
    label: 'Company',
    items: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    label: 'Documentation',
    href: '/docs',
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={viteLogo} alt="Logo" />
          </div>

          {/* Navigation */}
          <nav className="flex space-x-8">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className="inline-flex items-center text-gray-700 hover:text-gray-900 px-1 py-2 text-sm font-medium"
                >
                  {item.label}
                  {item.items && (
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.items && openMenu === item.label && (
                  <div className="absolute z-10 -ml-4 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}