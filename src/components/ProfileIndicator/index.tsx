import { useToggle, useMedia } from "react-use";
import { useStoreState, useStoreActions } from "-/lib/EasyPeasy";
import {
  Container,
  ProfileImage,
  ProfileName,
  Arrow,
  Popup,
  PopupAnchor
} from "./styles";

const ProfileIndicator = () => {
  const isSmall = useMedia("(max-width:650px)");
  const user = useStoreState(state => state.user);
  const logout = useStoreActions(state => state.user.logout);
  const [isPopupActive, toggle] = useToggle(false);
  if (isSmall) {
    return (
      <>
        <PopupAnchor>Perfil</PopupAnchor>
        <PopupAnchor
          exit
          onClick={() => {
            logout();
          }}
        >
          Sair
        </PopupAnchor>
      </>
    );
  }
  return (
    <Container
      onClick={() => {
        toggle();
      }}
    >
      <ProfileImage />
      <ProfileName>{user.username}</ProfileName>
      <Arrow flipped={isPopupActive} />
      <Popup active={isPopupActive}>
        <PopupAnchor>Perfil</PopupAnchor>
        <PopupAnchor
          exit
          onClick={() => {
            logout();
          }}
        >
          Sair
        </PopupAnchor>
      </Popup>
    </Container>
  );
};

export default ProfileIndicator;
