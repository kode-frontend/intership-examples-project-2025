import {styled} from '@shared/ui/theme'
import {ReactNode, useState} from 'react'
import {RefreshControl} from "react-native";

export type Props = {
    depositsSlot: ReactNode
    accountsSlot: ReactNode
    buttonSlot: ReactNode
    isLoading?: boolean
    refetch: VoidFunction
}

const BOTTOM_BUTTON_MARGIN = 24
const TOP_BUTTON_MARGIN = 0

const Wrapper = styled.ScrollView<{ padding?: number }>`
    background-color: ${({theme}) => theme.palette.background.primary};
    gap: ${({theme}) => theme.spacing(2)}px;
    flex-grow: 1;
    padding: ${({padding = 0}) => padding}px;
`

const ButtonWrapper = styled.View`
    position: absolute;
    bottom: ${BOTTOM_BUTTON_MARGIN}px;
    padding: ${({theme}) => theme.spacing(2)}px;
    left: 0;
    width: 100%;
`

export const HomePageTemplate = ({
                                     accountsSlot,
                                     depositsSlot,
                                     refetch,
                                     isLoading,
                                     buttonSlot,
                                 }: Props) => {
    const [buttonHeight, setButtonHeight] = useState(0)

    return (
        <>
            <Wrapper
                refreshControl={<RefreshControl refreshing={isLoading || false}
                                                onRefresh={refetch}/>}
                contentContainerStyle={{flexGrow: 1, paddingBottom: buttonHeight}}>
                {accountsSlot}
                {depositsSlot}
            </Wrapper>
            <ButtonWrapper
                onLayout={event =>
                    setButtonHeight(
                        event.nativeEvent.layout.height +
                        BOTTOM_BUTTON_MARGIN +
                        TOP_BUTTON_MARGIN,
                    )
                }>
                {buttonSlot}
            </ButtonWrapper>
        </>
    )
}
