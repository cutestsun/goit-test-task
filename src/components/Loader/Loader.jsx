import PuffLoader from "react-spinners/PuffLoader";
import { colors } from "../../utils/variables";
import { Backdrop } from "./Loader.styled";

export const Loader = () => {
  return (
    <Backdrop>
      <PuffLoader color={colors.mainAccent} size={100} />
    </Backdrop>
  );
};
