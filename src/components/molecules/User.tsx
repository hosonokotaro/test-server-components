import { list, name as styleName } from "@/molecules/User.css";

type Props = {
  id: string;
  name: string;
};

export const User = ({ id, name }: Props) => {
  return (
    <div className={list}>
      <div>{id}</div>
      <div className={styleName}>{name}</div>
    </div>
  );
};
