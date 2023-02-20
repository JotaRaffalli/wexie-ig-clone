import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ApiService from "../../services/api.service";

function Profile() {
  const params = useParams<{username: string}>();

  const {
    isLoading: isProfileLoading,
    error: profileError,
    data: profileResponse,
  } = useQuery("profile", () => ApiService.fetchProfile(params.username!), {enabled: Boolean(params.username)});

  return <div>{profileResponse?.data.username}</div>;
}

export default Profile;
