// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveAppsTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    setActiveAppsTabId(tabId)
  }

  const activeTabClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-button ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem