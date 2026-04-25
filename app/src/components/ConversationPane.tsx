import type { Conversation } from '../types'

interface ConversationPaneProps {
  conversations: Conversation[]
  selectedConversationId: number
  onSelectConversation: (conversationId: number) => void
}

const avatarColors = ['#a58fff', '#f2cf56', '#95b6ee', '#eea181', '#f2cf56', '#9bd9c2', '#9f8ffd']

const Chevron = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="chevron">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const HeaderListIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M11 4v16" />
  </svg>
)

const EditIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15 5h4v4" />
    <path d="M10.5 13.5 19 5" />
    <path d="M6 19h12" />
    <path d="M6 10v9h9" />
  </svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="6" />
    <path d="m16 16 5 5" />
  </svg>
)

const FilterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 7h11" />
    <circle cx="18" cy="7" r="2" />
    <path d="M4 17h7" />
    <circle cx="14" cy="17" r="2" />
  </svg>
)

const getInitial = (name: string): string => {
  const trimmed = name.trim()
  return trimmed ? trimmed.charAt(0).toUpperCase() : 'A'
}

const normalizePreview = (value: string): string => {
  const trimmed = value.trim()

  if (trimmed.length <= 34) {
    return trimmed
  }

  return `${trimmed.slice(0, 34).trimEnd()}...`
}

export const ConversationPane = ({
  conversations,
  selectedConversationId,
  onSelectConversation,
}: ConversationPaneProps) => {
  return (
    <section className="conversation-list-panel panel-card" aria-label="Conversation list">
      <header className="panel-head">
        <h2>
          <span className="head-icon" aria-hidden="true">
            <HeaderListIcon />
          </span>
          Michael Johnson
        </h2>

        <button type="button" className="icon-button plain" aria-label="Edit inbox view">
          <EditIcon />
        </button>
      </header>

      <div className="panel-search-row">
        <span className="search-icon" aria-hidden="true">
          <SearchIcon />
        </span>
        <input type="text" placeholder="Search Chat" aria-label="Search chat" />
        <button type="button" className="icon-button plain" aria-label="Filter conversations">
          <FilterIcon />
        </button>
      </div>

      <div className="panel-filter-row">
        <button type="button" className="filter-chip">
          <strong>Open</strong>
          <Chevron />
        </button>

        <button type="button" className="filter-chip">
          <strong>Newest</strong>
          <Chevron />
        </button>
      </div>

      <div className="conversation-list">
        {conversations.map((conversation, index) => (
          <button
            key={conversation.id}
            type="button"
            className={`conversation-item${conversation.id === selectedConversationId ? ' active' : ''}`}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <span
              className="avatar-dot"
              style={{ backgroundColor: avatarColors[index % avatarColors.length] }}
              aria-hidden="true"
            >
              {getInitial(conversation.name)}
            </span>

            <div>
              <h3>{conversation.name}</h3>
              <p>{normalizePreview(conversation.role)}</p>
            </div>

            <time>{conversation.lastSeen}</time>
          </button>
        ))}
      </div>
    </section>
  )
}
