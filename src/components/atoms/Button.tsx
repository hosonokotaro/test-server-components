import * as Style from "@/atoms/Button.css";

type Props = {
  text: string;
  isDisabled: boolean;
  handleOnClick: VoidFunction;
};

export const Button = ({
  text,
  isDisabled,
  handleOnClick,
}: Props): JSX.Element => {
  return (
    <button
      type="button"
      className={Style.base}
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
