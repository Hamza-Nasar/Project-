import type { Conversation } from '../types'

interface SidebarProps {
  totalConversations: number
  unassignedConversations: number
  conversations: Conversation[]
}

interface SidebarItem {
  label: string
  count?: number
  icon: JSX.Element
  muted?: boolean
}

const inboxItems = (totalConversations: number, unassignedConversations: number): SidebarItem[] => [
  {
    label: 'My Inbox',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M4.5 19c0-3.1 2.8-5.1 7.5-5.1S19.5 15.9 19.5 19" />
      </svg>
    ),
  },
  {
    label: 'All',
    count: totalConversations,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="8" r="2.8" />
        <circle cx="16" cy="8" r="2.8" />
        <path d="M2.5 18c0-2.7 2.3-4.5 5.5-4.5s5.5 1.8 5.5 4.5" />
        <path d="M10.5 18c0-2.7 2.2-4.5 5.5-4.5" />
      </svg>
    ),
  },
  {
    label: 'Unassigned',
    count: unassignedConversations,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
      </svg>
    ),
  },
]

const teamItems: SidebarItem[] = [
  {
    label: 'Sales',
    count: 7,
    muted: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="9" r="3" />
        <circle cx="15.2" cy="9" r="2.4" />
        <path d="M4 18c0-2.8 2.4-4.5 5-4.5s5 1.7 5 4.5" />
      </svg>
    ),
  },
  {
    label: 'Customer Support',
    count: 16,
    muted: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="9" r="3" />
        <circle cx="15.2" cy="9" r="2.4" />
        <path d="M4 18c0-2.8 2.4-4.5 5-4.5s5 1.7 5 4.5" />
      </svg>
    ),
  },
]

const defaultUserCounts = [2, 11, 0, 4, 5, 0, 1, 0, 2]

const userNames = [
  'Sarah Williams',
  'Michael Johnson',
  'Emily Davis',
  'Christopher Miller',
  'Amanda Garcia',
  'Joshua Martinez',
  'Ashley Taylor',
  'Daniel Anderson',
  'Jessica Thomas',
]

const Chevron = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="chevron">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="3.2" />
    <path d="M4.5 19c0-3.1 2.8-5.1 7.5-5.1S19.5 15.9 19.5 19" />
  </svg>
)

const ChannelAvatar = ({ type }: { type: 'wa' | 'ig' }) => {
  return <span className={`channel-avatar ${type}`}>{type === 'wa' ? 'W' : 'I'}</span>
}

const PrimaryItems = ({ items }: { items: SidebarItem[] }) => (
  <div className="menu-group">
    {items.map((item) => (
      <button type="button" key={item.label} className={`menu-item with-count${item.muted ? ' muted-icon' : ''}`}>
        <span className="label-wrap">
          <span className="item-icon">{item.icon}</span>
          <span>{item.label}</span>
        </span>
        {item.count ? <em>{item.count}</em> : null}
      </button>
    ))}
  </div>
)

export const Sidebar = ({ totalConversations, unassignedConversations }: SidebarProps) => {
  const channelName = 'Fit4Life'

  return (
    <aside className="inbox-sidebar panel-card" aria-label="Inbox sections">
      <h2>Inbox</h2>
      <PrimaryItems items={inboxItems(totalConversations, unassignedConversations)} />

      <button type="button" className="group-heading">
        <span>Teams</span>
        <Chevron />
      </button>
      <PrimaryItems items={teamItems} />

      <button type="button" className="group-heading">
        <span>Users</span>
        <Chevron />
      </button>

      <div className="users-list">
        {userNames.map((name, index) => (
          <button
            type="button"
            key={name}
            className={`user-row${name === 'Michael Johnson' ? ' selected' : ''}`}
          >
            <span className="label-wrap">
              <span className="item-icon muted-icon">
                <UserIcon />
              </span>
              <span>{name}</span>
            </span>
            {defaultUserCounts[index] ? <em>{defaultUserCounts[index]}</em> : null}
          </button>
        ))}
      </div>

      <button type="button" className="group-heading channel-heading">
        <span>Channels</span>
        <Chevron />
      </button>

      <div className="channel-list">
        <button type="button" className="channel-row selected">
          <span className="label-wrap">
            <ChannelAvatar type="wa" />
            <span>{channelName}</span>
          </span>
        </button>
        <button type="button" className="channel-row">
          <span className="label-wrap">
            <ChannelAvatar type="ig" />
            <span>{channelName}</span>
          </span>
        </button>
      </div>
    </aside>
  )
}
