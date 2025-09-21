export type FauxBoxProps = {
  title?: string;
};

export function FauxBox({ title }: FauxBoxProps) {
  return (
    <div className="border border-black p-4 rounded-lg shadow-sm bg-white bg-[repeating-linear-gradient(45deg,white_0_10px,red_10px_12px)] flex items-center justify-center">
      <p className="bg-white px-2 py-0.5 rounded border border-transparent font-mono">
        {title || "FauxBox Component"}
      </p>
    </div>
  );
}
