import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.profile};
  display: flex;
  gap: 2rem;
  padding: 2rem 2rem 2.5rem 2.5rem;
  border-radius: 0.625rem;
  max-width: 54rem;
  position: absolute;
  top: 13rem;
`;

export const ProfileContent = styled.div``;

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
`;

export const ProfileNameRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.title};
  }
`;

export const ProfileBioRow = styled.article`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0.5rem;
`;

export const ProfileTagsRow = styled.div`
  color: ${({ theme }) => theme.colors.subtitle};
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const ProfileTag = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.label};
  }
`;
