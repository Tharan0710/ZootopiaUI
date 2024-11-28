import { StyleProp } from '../../Interface/interface'
import buttonStyle from './Button.module.css'

export default function Button(props: StyleProp) {
  const Style = {
    height: props.height,
    width: props.width,
    backgroundColor: props.back,
    color: props.color,
    borderRadius: props.radius,
    border: props.border,
    alignSelf: props.align,
    marginRight: props.right,
    marginTop: props.top,
    fontSize: props.size,
  }
  return (
    <button className={`${buttonStyle.generalStyle} ${props.animate === true? buttonStyle.changeColor : null}`} onClick={props.event} style={Style}>
      {props.content? props.content : null}
      <i className={`${buttonStyle.deleteIcon} ${props.icon}`}></i>
    </button>
  )
}
