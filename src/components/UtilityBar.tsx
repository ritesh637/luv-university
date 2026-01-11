const UtilityBar = () => {
  const links = [
    { label: "Current Students", href: "#" },
    { label: "Faculty & Staff", href: "#" },
    { label: "Alumni", href: "#" },
    { label: "Office Directory", href: "#" },
  ];

  return (
    <div className="bg-luv-black text-white py-2">
      <div className="container-wide flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-sans text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="#visit"
            className="text-xs font-sans font-semibold uppercase tracking-wider border border-white/40 px-4 py-1.5 hover:bg-white/10 transition-colors"
          >
            Visit
          </a>
          <a
            href="#give"
            className="text-xs font-sans font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-4 py-1.5 hover:bg-luv-red-dark transition-colors"
          >
            Give
          </a>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
