import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const RoundedIcon: React.FC<Props> = ({ children, className }) => {
  return <div className={cn("rounded-full p-2", className)}>{children}</div>;
};
