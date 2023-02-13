import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ApiService from "../../services/api.service";
import Me from "../Me";

function Sidebar() {
  const {
    isLoading,
    error,
    data: profileResponse,
  } = useQuery("me", () => ApiService.fetchMe());

  return (
    <div>
      {isLoading || !profileResponse ? (<Skeleton width={100} height={100} count={1} className="mb-4" />) 
      : <Me {...profileResponse.data} />}
    </div>
  );
}

export default Sidebar;
