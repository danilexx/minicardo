import * as React from "react";
import { ClipLoader } from "react-spinners";
import { ThemeContext } from "-/lib/StyledComponents";

const Spinner: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { primary } = React.useContext(ThemeContext);
  return <ClipLoader size="1.5rem" color={primary} loading={loading} />;
};

export default Spinner;
