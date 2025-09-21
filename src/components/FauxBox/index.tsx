export type FauxBoxProps = {
  title?: string;
};

export function FauxBox({ title }: FauxBoxProps) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      {title || "FauxBox Component"}
    </div>
  );
}
