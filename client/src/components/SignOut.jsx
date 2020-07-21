import { useEffect } from "react";
import { signOut } from "../services/user";
import { useHistory } from "react-router-dom";

function SignOut(props) {
  const { clearUser, user } = props;
  const history = useHistory();

  useEffect(() => {
    signOut(user)
      .then(() => localStorage.setItem("token", ""))
      .finally(() => history.push("/"));
  });

  return "";
}

export default SignOut;
