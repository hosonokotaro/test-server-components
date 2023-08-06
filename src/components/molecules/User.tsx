type Props = {
  id: string;
  name: string;
};

export const User = ({ id, name }: Props) => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <div>{id}</div>
      <div style={{ color: "#F66" }}>{name}</div>
    </div>
  );
};
