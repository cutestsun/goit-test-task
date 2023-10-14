import { Button } from "./SecondaryBtn.styled";

export const SecondaryBtn = ({ onClick, children }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};
