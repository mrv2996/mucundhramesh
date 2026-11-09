import { useState } from "react";

const token = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY;

export type Tool = { name: string; domain?: string };

const ToolTile = ({ name, domain }: Tool) => {
  const [failed, setFailed] = useState(!domain || !token);
  return (
    <li className="flex flex-col items-center gap-1.5 text-center">
      {failed ? (
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border bg-muted text-xs font-semibold text-foreground">
          {name.slice(0, 3)}
        </span>
      ) : (
        <img
          src={`https://img.logo.dev/${domain}?token=${token}&size=80&format=png&retina=true`}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-10 w-10 rounded-lg object-contain"
        />
      )}
      <span className="text-sm text-muted-foreground leading-tight">{name}</span>
    </li>
  );
};

export const ToolLogos = ({ tools }: { tools: Tool[] }) => (
  <ul className="grid grid-cols-4 gap-3 lg:grid-cols-3">
    {tools.map((t) => <ToolTile key={t.name} {...t} />)}
  </ul>
);
