import {
  FaBuilding,
  FaGithub,
  FaShareSquare,
  FaUserFriends,
} from "react-icons/fa";

import AvatarImg from "../../assets/profile.jpeg";

import * as S from "./styles";

export function Profile() {
  return (
    <S.ProfileContainer>
      <S.ProfileAvatar src={AvatarImg} alt="profile" />
      <S.ProfileContent>
        <S.ProfileNameRow>
          <h1>Cameron Williamson</h1>
          <a href="#" target="_blank">
            <span>GITHUB</span>
            <FaShareSquare />
          </a>
        </S.ProfileNameRow>
        <S.ProfileBioRow>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </S.ProfileBioRow>
        <S.ProfileTagsRow>
          <S.ProfileTag>
            <FaGithub />
            <span>cameronwll</span>
          </S.ProfileTag>
          <S.ProfileTag>
            <FaBuilding />
            <span>Rocketseat</span>
          </S.ProfileTag>
          <S.ProfileTag>
            <FaUserFriends />
            <span>32 seguidores</span>
          </S.ProfileTag>
        </S.ProfileTagsRow>
      </S.ProfileContent>
    </S.ProfileContainer>
  );
}
