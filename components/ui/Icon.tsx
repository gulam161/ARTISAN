"use client";

import { Icon as IconifyIcon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface IconProps {
  icon: string;
  className?: string;
  onClick?: () => void;
  size?: number;
}

export default function Icon({ icon, className, onClick, size }: IconProps) {
  return <IconifyIcon icon={icon} className={cn(className)} onClick={onClick} width={size} height={size} />;
}
