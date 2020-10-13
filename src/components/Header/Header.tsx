import React, { useRef, useState } from 'react';
import CSS from 'csstype';

import * as S from './styled';
import {
  Button,
  IconButton,
  useScrollTrigger,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { theme } from 'theme';
import { ShowOnLarge, ShowOnMobile } from 'components';

type Props = {
  className?: string;
  style?: CSS.Properties;
};

const menuActions = [
  { label: 'Kariéra', onClick: () => console.log('kariera') },
  { label: 'Hobby', onClick: () => console.log('hobby') },
  { label: 'Škola', onClick: () => console.log('škola') },
];
const Header = ({ className = '', style }: Props) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const ref = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <S.Wrapper scrolled={trigger}>
      <img
        src="/react.svg"
        alt=""
        style={{ maxWidth: `${theme.toolbar.height}` }}
      />
      <ShowOnLarge>
        {menuActions.map((action) => (
          <Button variant="text" color="inherit" onClick={action.onClick}>
            {action.label}
          </Button>
        ))}
      </ShowOnLarge>
      <ShowOnMobile>
        <IconButton onClick={() =>setMenuOpen(!menuOpen)} ref={ref} color="primary">
          <MenuIcon />
        </IconButton>
        <S.ThemedMenu
          id="simple-menu"
          anchorEl={ref.current}
          keepMounted
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          {menuActions.map((action) => (
            <MenuItem onClick={action.onClick}>{action.label}</MenuItem>
          ))}
        </S.ThemedMenu>
      </ShowOnMobile>
    </S.Wrapper>
  );
};

export default Header;
