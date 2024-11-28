import alertStyle from './Alert.module.css'
import Button from '../Button/Button'
import { StyleProp } from '../../Interface/interface'

export default function Alert(props: StyleProp) {
    const closeAlert = () => {
        props.setalert?.(false);
    }

    const removeEmp = () => {
        props.setConfirmRmv?.(true);
        closeAlert();
    }
    return (
        <div className={alertStyle.alertWholeContain}>
            <div className={alertStyle.alertMessageInnerContain}>
                <h2 className={alertStyle.textMessage}>{`Are you sure want to \n remove the Animal?`}</h2>
                <div className={alertStyle.buttonsContain}>
                    <Button event={() => {removeEmp() }} size={"2.5vh"} color={"white"} height={"50%"} width={"20%"} back={"green"} border={"none"} radius={".5vh"} content={"Yes"} />
                    <Button event={() => {closeAlert()}} size={"2.5vh"} color={"white"} height={"50%"} width={"20%"} back={"red"} border={"none"} radius={".5vh"} content={"No"} />
                </div>
            </div>
        </div>
    )
}
