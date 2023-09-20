import { useParams } from "react-router-dom";
import UserProfileForm from "./UserProfileForm";
import Watchlist from "./Watchlist";
import NotificationTab from "./NotificationTab";

const UserViews = () => {
  const { type } = useParams();

  if (type === "profile") return <UserProfileForm />;
  if (type === "watchlist") return <Watchlist />;
  if (type === "notification") return <NotificationTab />;
};

export default UserViews;
