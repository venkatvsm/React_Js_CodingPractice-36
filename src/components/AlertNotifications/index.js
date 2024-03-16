// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderinfoNotfication = () => (
    <Notification>
      <MdInfo className="image blue" />
      <div>
        <h1 className="heading blue">Info</h1>
        <p className="para">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )
  const renderWarningNotfication = () => (
    <Notification>
      <MdWarning className="image yellow" />
      <div>
        <h1 className="heading yellow">Warning</h1>
        <p className="para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )
  const renderErrorNotfication = () => (
    <Notification>
      <RiErrorWarningFill className="image red" />
      <div>
        <h1 className="heading red">Error</h1>
        <p className="para">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )
  const renderSuccessNotfication = () => (
    <Notification>
      <AiFillCheckCircle className="image green" />
      <div>
        <h1 className="heading green">Success</h1>
        <p className="para">You can access all the files in the folder</p>
      </div>
    </Notification>
  )
  return (
    <div className="bg_container">
      <div className="card_Container">
        <h1 className="main_heading">Alert Notifications</h1>
        {renderSuccessNotfication()}
        {renderErrorNotfication()}
        {renderWarningNotfication()}
        {renderinfoNotfication()}
      </div>
    </div>
  )
}
export default AlertNotifications
