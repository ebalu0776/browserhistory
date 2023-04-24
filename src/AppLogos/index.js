import './index.css'

const AppLogos = props => {
  const {historyDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <div>
      <li className="logos-container">
        <p className="paragraph">{timeAccessed}</p>
        <img src={logoUrl} alt="logo url" className="app-logo" />
        <p className="paragraph">
          {title} <span className="span-elements">{domainUrl}</span>
        </p>
        <button type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </li>
    </div>
  )
}
export default AppLogos
