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

  return (
    <div className="grid grid-rows-2 py-2 gap-2 mx-auto max-w-xxl">
      <div className="grid grid-cols-2 gap-2">
        <div className="grid place-items-center gap-2">
          <img src={profileResponse?.data.profilePicture} alt="" className="rounded-full py-5 px-5 w-[250px]"/>
        </div>
        <div className="grid grid-rows-3">
          <div className="grid items-end">{profileResponse?.data.username}</div>
          <div className="grid items-center">{profileResponse?.data.following.length} seguidores {profileResponse?.data.followers.length} seguidos </div>
          <div className="grid items-start">{profileResponse?.data.name} {profileResponse?.data.lastName}</div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Profile;
