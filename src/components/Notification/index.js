// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="NotificationContainer">
      <div className="Notification_card">{children}</div>
      <GrFormClose className="closeIcon" />
    </div>
  )
}
export default Notification
