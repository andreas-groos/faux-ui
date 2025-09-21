export type FauxBoxProps = {
  title?: string;
};

export function FauxBox({ title }: FauxBoxProps) {
  return (
    <div className="border border-black p-4 rounded-lg bg-gray-50 shadow-sm">
      {title || "FauxBox Component"}
    </div>
  );
}
