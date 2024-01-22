import Link from "next/link";
import './navbar.module.css'
const Navbar = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div>
      <div className="logo">Logo</div>
      <div>
        {links.map((link) => (
          <Link href={link.path} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
