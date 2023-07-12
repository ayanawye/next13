import Navigation from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Posts", href: "/posts" },
];

const Header = () => {
  return (
    <header className="header">
      <Navigation navLinks={navItems} />
    </header>
  );
};

export default Header;
