import Link from 'next/link';

export interface ISideBar {}

const SidebarLayout: React.FC<ISideBar> = () => {
  return (
    <nav>
      <input placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
