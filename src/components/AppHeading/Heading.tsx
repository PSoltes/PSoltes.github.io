import React, { PropsWithChildren } from 'react'
import * as S from './styled'

interface IProps {
    level?: 1|2|3
    colored?: boolean
}
const AppHeading = ({level = 2, colored = false, children}:PropsWithChildren<IProps>) => {
    const cls = colored ? 'color' : ''

    switch(level) {
    case 1: 
        return <S.AppH1 className={cls}>{children}</S.AppH1>
    case 2: 
        return <S.AppH2 className={cls}>{children}</S.AppH2>
    case 3:
        return <S.AppH3 className={cls}>{children}</S.AppH3>
    }
}
export default AppHeading