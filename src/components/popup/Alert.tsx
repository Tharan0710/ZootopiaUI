import alertStyle from './Alert.module.css'
import Button from '../Button/Button'
import { StyleProp } from '../../Interface/interface'

export default function Alert(props: StyleProp) {
    const closeAlert = (): void => {
        props.setalert?.(false);
    }

    const removeAnim = (): void => {
        props.setConfirmRmv?.(true);
        closeAlert();
        window.location.reload();
    }

    const closeDetail = (): void => {
        props.setDetailProp?.(false);
    }
    return (
        (props.detailProp) ?
            <div className={alertStyle.alertWholeContain}>
                <div className={alertStyle.alertMessageInnerContain}>
                    <div className={alertStyle.popupHead}>
                        <h2 className={alertStyle.animName}>{`${props.eachAnim?.Name}'s Details`}</h2>
                        <Button event={() => { closeDetail() }} animate={true} color={"white"} weight={"bold"} size={"1rem"} content='X' height={"80%"} width={"7%"} back={"transparent"} right={"2%"} border={"none"} radius={".5vh"} display={"flex"} justify={"center"} alignItems={"center"} />
                    </div>
                    <div className={alertStyle.popupText}>
                        <div className={alertStyle.textHead}>
                            <h2 className={alertStyle.textKey}>Name<p className={alertStyle.semicolon}>:</p></h2>
                            <h2 className={alertStyle.textKey}>Type<p className={alertStyle.semicolon}>:</p></h2>
                            <h2 className={alertStyle.textKey}>Food Chain<p className={alertStyle.semicolon}>:</p></h2>
                            <h2 className={alertStyle.textKey}>Habitat<p className={alertStyle.semicolon}>:</p></h2>
                            <h2 className={alertStyle.textKey}>Can Fly<p className={alertStyle.semicolon}>:</p></h2>
                            <h2 className={alertStyle.textKey}>Has Fur<p className={alertStyle.semicolon}>:</p></h2>
                        </div>
                        <div className={alertStyle.textVal}>
                            <h2 className={alertStyle.textMessage}>{props.eachAnim?.Name}</h2>
                            <h2 className={alertStyle.textMessage}>{props.eachAnim?.Type}</h2>
                            <h2 className={alertStyle.textMessage}>{props.eachAnim?.FoodChain}</h2>
                            <h2 className={alertStyle.textMessage}>{props.eachAnim?.Habitat}</h2>
                            <h2 className={alertStyle.textMessage}>{props.eachAnim?.["Can Fly"] === true ? "Yes" : "No"}</h2>
                            <h2 className={alertStyle.textMessage}>{props.eachAnim?.['Has Fur'] === true ? "Yes" : "No"}</h2>
                        </div>
                    </div>
                </div>
            </div > :
            <div className={alertStyle.alertWholeContain}>
                <div className={alertStyle.alertMessageInnerContain}>
                    <h2 className={alertStyle.textMessage}>{props.content}</h2>
                    <div className={alertStyle.buttonsContain}>
                        <Button event={() => { removeAnim() }} size={"2.5vh"} color={"white"} height={"50%"} width={"20%"} back={"green"} border={"none"} radius={".5vh"} content={"Yes"} />
                        <Button event={() => { closeAlert() }} size={"2.5vh"} color={"white"} height={"50%"} width={"20%"} back={"red"} border={"none"} radius={".5vh"} content={"No"} />
                    </div>
                </div>
            </div>

    )
}
