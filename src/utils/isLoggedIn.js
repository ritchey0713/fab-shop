import LoggedIn from "../components/header/loggedIn.component";
import NotLoggedIn from "../components/header/NotLoggedIn.component";

export const isLoggedIn = (currentUser) => {
  if (currentUser === null) {
    return "LOADING COMP";
  } else if (!currentUser) {
    return <NotLoggedIn />;
  }
  return <LoggedIn />;
};
