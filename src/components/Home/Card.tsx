import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Play } from "lucide-react";

interface CardProps {
  title: string;
  thumbnail?: string;
  subtitle: string;
  rounded?: boolean;
  className?: string;
  url: string;
}
export const Card: React.FC<CardProps> = ({
  title,
  thumbnail,
  subtitle,
  url,
  className,
  rounded,
}) => {
  return (
    <div
      className={cn(
        "rounded-lg  hover:bg-gray-100 flex flex-col  shadow-lg col-span-2 group ",
        className,
      )}
    >
      <div className="relative">
        <div className="h-48  w-full flex items-center justify-center overflow-hidden">
          <img
            className={clsx(
              "w-full h-full object-cover",
              rounded ? "rounded-full" : "rounded-lg",
            )}
            src={thumbnail}
          />
        </div>
        <div
          className="bg-primary w-12 absolute bottom-2 cursor-pointer right-2 shadow-lg
          rounded-full p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Play />
        </div>
      </div>
      <div className="px-1  ">
        <p className="m-0 mt-1  text-sm cursor-pointer  hover:text-primary">
          {title}
        </p>
        <div className="h-10 mt-1">
          <p className="text-xs break-words text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
