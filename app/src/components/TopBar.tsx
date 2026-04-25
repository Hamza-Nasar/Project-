const navItems = [
  {
    id: 'Inbox',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 14h5l2 3h4l2-3h5" />
      </svg>
    ),
  },
  {
    id: 'Contacts',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="9" r="3" />
        <path d="M2.5 18.5c0-2.4 2.2-4 5.5-4s5.5 1.6 5.5 4" />
        <circle cx="17" cy="8" r="2.3" />
        <path d="M14 14c2.1 0 4 .9 4.9 2.3" />
      </svg>
    ),
  },
  {
    id: 'AI Employees',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l1.6 3.4L17 8l-3.4 1.6L12 13l-1.6-3.4L7 8l3.4-1.6z" />
        <path d="M18.5 13.5l.9 1.8 1.8.9-1.8.9-.9 1.8-.9-1.8-1.8-.9 1.8-.9z" />
      </svg>
    ),
  },
  {
    id: 'Workflows',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7" cy="6" r="2" />
        <circle cx="17" cy="6" r="2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path d="M9 6h6M7 8v8M17 8v8M9 18h6" />
      </svg>
    ),
  },
  {
    id: 'Campaigns',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8l5-5" />
      </svg>
    ),
  },
]

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1.9 1.9 0 0 1-2.7 2.7l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 0 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a1.9 1.9 0 1 1-2.7-2.7l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 0 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a1.9 1.9 0 1 1 2.7-2.7l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 0 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a1.9 1.9 0 0 1 2.7 2.7l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 0 1 0 4h-.2a1 1 0 0 0-.9.6" />
  </svg>
)

export const TopBar = () => {
  return (
    <header className="top-bar panel-card">
      <div className="product-mark" aria-label="Product name">
        <h1>
          <span className="box">BOX</span>
          <span className="pad">pad</span>
        </h1>
      </div>

      <nav className="top-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button key={item.id} type="button" className={item.id === 'Inbox' ? 'active' : ''}>
            <span className="nav-icon">{item.icon}</span>
            <span>{item.id}</span>
          </button>
        ))}
      </nav>

      <div className="top-profile" aria-label="Current agent">
        <button type="button" className="settings-button" aria-label="Open settings">
          <SettingsIcon />
        </button>

        <span className="profile-pill">
          <span className="profile-avatar">M</span>
          <span>Michael Johnson</span>
        </span>
      </div>
    </header>
  )
}
