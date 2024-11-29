export interface StyleProp {
    height?: string,
    width?: string,
    back?: string,
    color?: string,
    radius?: string,
    border?: string,
    align?: string,
    right?: string,
    top?: string,
    size?: string,
    event?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    content?: string,
    contentNum?: number,
    icon?: string,
    setalert?: Function | undefined,
    setConfirmRmv?: Function | undefined,
    setDetailProp?: Function | undefined,
    detailProp?: boolean,
    animate?: boolean,
    display?: string,
    justify?: string,
    alignItems?: string,
    weight?: string,
    eachAnim?: Animals,
}

export interface Animals {
    Name?: string,
    FoodChain?: string,
    Habitat?: string,
    Type?: string,
    "Has Fur"?: boolean,
    "Can Fly"?: boolean
}

export type Animal = {
    [key: string]: Animals;
}

export interface FuncProps {
    setalert: (value: boolean) => void;
}