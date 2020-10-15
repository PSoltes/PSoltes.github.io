import React from 'react';
import CSS from 'csstype';

import * as S from './styled';
import {
  Button,
  useScrollTrigger,
  MenuItem,
} from '@material-ui/core';
import { theme } from 'theme';
import { PopperMenu, ShowOnLarge, ShowOnMobile } from 'components';

type Props = {
  className?: string;
  style?: CSS.Properties;
};

const menuActions = [
  { label: 'Career', href: '#career' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
];
const Header = ({ className = '', style }: Props) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  return (
    <S.Wrapper scrolled={trigger}>
      <img
        src="/logo192.png"
        alt=""
        style={{ maxWidth: `${theme.toolbar.height}` }}
      />
      <ShowOnLarge>
        <S.ThemedButtonGroup variant="text" color="inherit">
          {menuActions.map((action, index) => (
            <Button key={index} href={action.href}>{action.label}</Button>
          ))}
        </S.ThemedButtonGroup>
      </ShowOnLarge>
      <ShowOnMobile>
        <PopperMenu
          placement="bottom"
          disablePortal={false}
          modifiers={{
            flip: {
              enabled: false,
            },
            preventOverflow: {
              enabled: true,
              boundariesElement: 'scrollParent',
            },
          }}
        >
          {menuActions.map((action, index) => (
            <MenuItem
              button
              key={index}
              onClick={() => {
                window.location.replace(action.href);
              }}
            >
              {action.label}
            </MenuItem>
          ))}
        </PopperMenu>
      </ShowOnMobile>
    </S.Wrapper>
  );
};

export default Header;
