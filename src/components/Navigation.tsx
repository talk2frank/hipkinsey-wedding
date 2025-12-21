interface NavigationProps {
  currentPage: 'home' | 'story' | 'faq'| 'gifts';
  onNavigate: (page: 'home' | 'story' | 'faq' | 'gifts') => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home' as const, label: 'Our Day' },
    { id: 'story' as const, label: 'Our Story' },
    { id: 'faq' as const, label: 'FAQ' },
    { id: 'gifts' as const, label: 'Gifts' }
  ];

  return (
    <nav className="w-full bg-oat/80 backdrop-blur-sm border-b border-charcoal-200/20 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-cormorant text-2xl transition-all duration-300 relative
                  ${currentPage === item.id 
                    ? 'text-charcoal-800' 
                    : 'text-charcoal-600 hover:text-pink-200'
                  }
                `}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 
                                bg-mint-200 rounded-full shadow-md
                                animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}