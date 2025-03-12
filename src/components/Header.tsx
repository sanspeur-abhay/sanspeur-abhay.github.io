import { useState } from 'react';

type NavItem = {
  label: string;
  items?: string[];
  href?: string;
};

const navigation: NavItem[] = [
  {
    label: 'Activities',
    items: ['Research & Publiccations', 'Funded Project', 'IP Filed', 'Training Programmes'],
  },
  {
    label: 'Academic Resources',
    items: ['Research Resources', 'Term & Condition'],
  },
  {
    label: 'Lineage',
    items: ['Awards', 'Research Supervision', 'Photos'],
  },
  {
    label: 'Home',
    href: '/',
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">

                <a href="/" className="inline-block text-gray-800 hover:text-blue-600 text-xl font-semibold transition-colors duration-200">
                    Abhay Kumar
                </a>
                <p className="text-gray-500 text-sm mt-1">Leading Expert in Environmental Engineering and Waste Management</p>
    

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
                  <div className="absolute z-10 -ml-4 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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