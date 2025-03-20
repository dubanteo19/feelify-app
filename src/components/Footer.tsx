import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { RoundedIcon } from "./styled-components/RoundedIcon";
type FooterColm = {
  footerHead: string;
  links: { text: string; target: string }[];
};
export const Footer = () => {
  const footerData: FooterColm[] = [
    {
      footerHead: "Company",
      links: [
        { text: "About", target: "/about" },
        { text: "Job", target: "/jobs" },
        { text: "For the Record", target: "/record" },
      ],
    },
    {
      footerHead: "Communitie",
      links: [
        { text: "For Artists", target: "/about" },
        { text: "Developers", target: "/developers" },
        { text: "Advertising", target: "/advertising" },
        { text: "Investors", target: "/investors" },
        { text: "Vendors", target: "/vendors" },
      ],
    },
    {
      footerHead: "Useful links",
      links: [
        { text: "Support", target: "/support" },
        { text: "Contact", target: "/contact" },
      ],
    },

    {
      footerHead: "Fellify plans",
      links: [
        { text: "Fellify Premium", target: "/plan-premium" },
        { text: "Fellify Free", target: "/plan-free" },
      ],
    },
  ];
  return (
    <div className="px-10 py-5">
      <div className="grid grid-cols-5  ">
        <div className="col-span-4 grid grid-cols-12 gap-20 ">
          {footerData.map((item) => (
            <div className="col-span-3">
              <p className="text-black font-bold">{item.footerHead}</p>
              <div className="flex flex-col ">
                {item.links.map((link) => (
                  <Link className="!text-gray-700" to={link.target}>{link.text}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 ">
          <div className="flex flex-row-reverse gap-2">
            <RoundedIcon className="bg-primary text-white">
              <Facebook />
            </RoundedIcon>
            <RoundedIcon className="bg-primary text-white">
              <Twitter />
            </RoundedIcon>
            <RoundedIcon className="bg-primary text-white">
              <Instagram />
            </RoundedIcon>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-200" style={{ margin: "20px 0" }}></div>
      <div style={{ padding: "20px 0" }}>
        <p>© 1999-2025 Fellify </p>
      </div>
    </div>
  );
};
