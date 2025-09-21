export type FauxBoxProps = {
  title?: string;
  description?: string;
  color?:
    | "red"
    | "blue"
    | "green"
    | "purple"
    | "yellow"
    | "gray"
    | "pink"
    | "indigo";
};

const stripePatterns = {
  red: "bg-[repeating-linear-gradient(45deg,white_0_10px,#fca5a5_10px_12px)]",
  blue: "bg-[repeating-linear-gradient(45deg,white_0_10px,#93c5fd_10px_12px)]",
  green: "bg-[repeating-linear-gradient(45deg,white_0_10px,#86efac_10px_12px)]",
  purple:
    "bg-[repeating-linear-gradient(45deg,white_0_10px,#c4b5fd_10px_12px)]",
  yellow:
    "bg-[repeating-linear-gradient(45deg,white_0_10px,#fde68a_10px_12px)]",
  gray: "bg-[repeating-linear-gradient(45deg,white_0_10px,#d1d5db_10px_12px)]",
  pink: "bg-[repeating-linear-gradient(45deg,white_0_10px,#f9a8d4_10px_12px)]",
  indigo:
    "bg-[repeating-linear-gradient(45deg,white_0_10px,#a5b4fc_10px_12px)]",
} as const;

export function FauxBox({
  title,
  description = "",
  color = "red",
}: FauxBoxProps) {
  const stripeClass = stripePatterns[color];

  return (
    <div
      className={`border border-black p-4 rounded-lg shadow-sm bg-white ${stripeClass} flex items-center justify-center`}
    >
      <div className="bg-white px-2 py-0.5 rounded border border-transparent text-center">
        <p className="font-mono ">{title || "FauxBox Component"}</p>
        {!!description && (
          <div className="2 text-xs text-gray-500 italic">{description}</div>
        )}
      </div>
    </div>
  );
}
