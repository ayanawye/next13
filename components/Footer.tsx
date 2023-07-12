import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/posts">Its footer</Link>
    </footer>
  );
};

export default Footer;