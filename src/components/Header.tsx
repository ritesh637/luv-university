import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Admission", href: "#admission" },
    { label: "Campus Life", href: "#campus" },
    { label: "Research", href: "#research" },
    { label: "Athletics", href: "#athletics" },
  ];

  return (
    <>
      <header className="bg-background sticky top-0 z-50 border-b border-border">
        <div className="container-wide flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="bg-primary text-primary-foreground px-4 py-3 font-serif font-bold text-lg tracking-tight">
              Luv University
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-sans font-medium text-foreground hover:text-primary transition-colors group"
              >
                {item.label}
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="ml-2 p-2.5 bg-primary text-primary-foreground hover:bg-luv-red-dark transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container-wide py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-foreground font-sans font-medium hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-3 text-foreground font-sans font-medium hover:bg-muted transition-colors"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-luv-black/95 flex items-start justify-center pt-20 animate-fade-in">
          <div className="w-full max-w-2xl px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-white font-serif text-2xl">Search Luv University</h2>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close search"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full bg-transparent border-b-2 border-white/30 text-white text-xl py-4 focus:outline-none focus:border-primary placeholder:text-white/50"
                autoFocus
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-white/50" />
            </div>
            <div className="mt-8 text-white/60 text-sm font-sans">
              <p className="mb-4">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {["Admissions", "Programs", "Research", "Campus Tour", "Financial Aid"].map((term) => (
                  <button
                    key={term}
                    className="px-4 py-2 border border-white/20 text-white/80 hover:bg-white/10 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
