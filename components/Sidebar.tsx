import React from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { NavbarData } from "@/constants";
import { usePathname } from "next/navigation";
import { useOutsideClick } from "@/hooks/use-outside-click";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodyColor border-l border-l-hoverColor/20 shadow-xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="hover:text-red-600 hoverEffect"
          aria-label="Close sidebar"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2">
        <Logo title="Joseph" subtitle="." />
        {NavbarData.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${
              item?.link === pathname && "text-hoverColor"
            }`}
            onClick={onClose}
          >
            {item.title}
          </Link>
        ))}
        <Link
          href={"/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
          onClick={onClose}
        >
          Hire me
        </Link>
        <div>
          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
