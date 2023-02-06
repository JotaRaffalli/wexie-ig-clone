import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ApiService from "../../services/api.service";
import Post from "../Post";

function Timeline() {
  const {
    isLoading,
    error,
    data: postResponse,
  } = useQuery("posts", () => ApiService.fetchPosts());

  return (
    <div className="container col-span-2">
      {isLoading ? (
        <Skeleton width={248} height={400} count={3} className="mb-4" />
      ) : postResponse?.data.length ? (
        postResponse?.data?.map((post) => <Post {...post} />)
      ) : (
        "Comienza a seguir personas para ver publicaciones"
      )}
    </div>
  );
}

export default Timeline;
