import Link from "next/link";
import { WhatsAppIcon } from "../icons/social";
import config from "@/config/config";

const SocialButtons = () => {
  const socialItems = [
    { href: config.urls.whatsApp, icon: <WhatsAppIcon /> },
    { href: config.urls.whatsApp, icon: <WhatsAppIcon /> },
  ];
  return (
    <div className="flex flex-col items-end gap-[1.5rem] [&_svg]:fill-soft-white">
      {socialItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className="w-[4rem] h-[3rem] rounded-full flex items-center justify-center shadow-s3 bg-primary"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialButtons;
