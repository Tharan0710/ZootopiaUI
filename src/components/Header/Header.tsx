import { StyleProp } from '../../Interface/interface'
import headerStyle from './Header.module.css'

export default function Header(props: StyleProp) {
  return (
    <header className={headerStyle.mainPageHeader}>
      <i data-testid={props['data-testid']} className={`${props.icon} ${headerStyle.companyIcon}`} ></i>
      <h2 className={headerStyle.companyName}>{props.content}</h2>
    </header>
  )
}
