import React, { useRef, useState } from 'react';

import * as S from './styled';
import { ClickAwayListener, IconButton, PopperProps } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

type AppPopperProps = {
  onClickAway?: (event?: React.MouseEvent<Document, MouseEvent>) => void;
} & Omit<PopperProps, 'open' | 'anchorEl'>;

const PopperMenu = ({ onClickAway, children, ...rest }: AppPopperProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <ClickAwayListener
      onClickAway={onClickAway ? onClickAway : () => setMenuOpen(false)}
    >
      <div>
        <IconButton
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          ref={ref}
          color="primary"
        >
          <Menu />
        </IconButton>
        <S.AppPopper open={menuOpen} anchorEl={ref.current} {...rest}>
          <S.PopperPaper>{children}</S.PopperPaper>
        </S.AppPopper>
      </div>
    </ClickAwayListener>
  );
};

export default PopperMenu;
