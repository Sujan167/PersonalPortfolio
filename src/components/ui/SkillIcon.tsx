import { Code, Settings, Cloud, Layers, Database } from "lucide-react";

export type IconType = "code" | "settings" | "cloud" | "layers" | "database";

interface SkillIconProps {
  type: IconType;
}

export function SkillIcon({ type }: SkillIconProps) {
  const iconProps = {
    className: "h-6 w-6 text-primary mr-2"
  };

  switch (type) {
    case "code":
      return <Code {...iconProps} />;
    case "settings":
      return <Settings {...iconProps} />;
    case "cloud":
      return <Cloud {...iconProps} />;
    case "layers":
      return <Layers {...iconProps} />;
    case "database":
      return <Database {...iconProps} />;
  }
} 