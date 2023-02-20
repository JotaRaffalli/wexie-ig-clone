import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ApiService from "../../services/api.service";
import Me from "../Me";
import Suggestions from "../Suggestions";

const Sidebar:React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const {
    isLoading: isProfileLoading,
    error: profileError,
    data: profileResponse,
  } = useQuery("me", () => ApiService.fetchMe());

  const {
    isLoading: isSuggestionsLoading,
    error: suggestionError,
    data: suggestionsResponse,
  } = useQuery("suggestions", () => ApiService.fetchSuggestions(profileResponse!.data.following, profileResponse!.data.id), {enabled: Boolean(profileResponse)});

  return (
    <div>
      {isProfileLoading || !profileResponse ? (<Skeleton width={100} height={100} count={1} className="mb-4" />) 
      : <Me {...profileResponse.data} />}

      {isSuggestionsLoading || !suggestionsResponse ? (<Skeleton width={100} height={100} count={3} className="mb-4" />) 
      : <Suggestions data={suggestionsResponse.data} />}
    </div>
  );
}

export default Sidebar;
