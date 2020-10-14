import React, { useRef, useState } from 'react';
import CSS from 'csstype';

import * as S from './styled';
import {
  Button,
  IconButton,
  useScrollTrigger,
  MenuItem,
  Paper,
  Popper,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { theme } from 'theme';
import { ShowOnLarge, ShowOnMobile } from 'components';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


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
  const ref = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <S.Wrapper scrolled={trigger}>
      <img
        src="/logo192.png"
        alt=""
        style={{ maxWidth: `${theme.toolbar.height}` }}
      />
      <ShowOnLarge>
        <S.ThemedButtonGroup variant="text" color="inherit">
          {menuActions.map((action) => (
            <Button href={action.href}>{action.label}</Button>
          ))}
        </S.ThemedButtonGroup>
      </ShowOnLarge>
      <ShowOnMobile>
        <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
          <div>
            <IconButton
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              ref={ref}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Popper
              open={menuOpen}
              anchorEl={ref.current}
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
              <Paper>
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
              </Paper>
            </Popper>
          </div>
        </ClickAwayListener>
      </ShowOnMobile>
    </S.Wrapper>
  );
};

export default Header;
