import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />
      <Profile />
    </S.Container>
  )
}
