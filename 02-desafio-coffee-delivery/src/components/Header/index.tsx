import React from 'react';
import { MapPin, ShoppingCart } from 'phosphor-react';

import LogoImage from '../../assets/images/logo.png';

import * as S from './styles';

export const Header: React.FC = () => {
  return (
    <S.Container>
        <div>
            <img src={LogoImage} alt="logo" />
        </div>

        <S.Content>
            <S.ButtonLocation>
                <MapPin size={26} weight="fill" />
                <span>Porto Alegre, RS</span>
            </S.ButtonLocation>
            <S.ButtonCart>
                <ShoppingCart size={20} weight="fill" />
            </S.ButtonCart>
        </S.Content>
    </S.Container>
  );
}
