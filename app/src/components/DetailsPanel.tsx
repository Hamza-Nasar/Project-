import type { Conversation } from '../types'

interface DetailsPanelProps {
  conversation: Conversation | null
}

const HeaderListIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M11 4v16" />
  </svg>
)

const Chevron = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="chevron">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
  </svg>
)

const TagIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 11V5a2 2 0 0 1 2-2h6l10 10-8 8L3 11Z" />
    <circle cx="8" cy="8" r="1.3" />
  </svg>
)

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
)

const InstagramIcon = () => (
  <span className="channel-avatar ig">I</span>
)

const splitName = (name?: string) => {
  if (!name) {
    return { first: 'Olivia', last: 'Mckinsey' }
  }

  const parts = name.split(' ')
  return {
    first: parts[0] ?? 'Olivia',
    last: parts.slice(1).join(' ') || 'Mckinsey',
  }
}

export const DetailsPanel = ({ conversation }: DetailsPanelProps) => {
  const contact = splitName(conversation?.name)
  const email = conversation?.email ?? 'olivia.Mckinsey@gmail.com'
  const phone = '+1 (312) 555-0134'

  return (
    <aside className="details-panel panel-card" aria-label="Contact details">
      <header className="panel-head">
        <h2>Details</h2>
        <span className="head-icon" aria-hidden="true">
          <HeaderListIcon />
        </span>
      </header>

      <section className="details-section">
        <button type="button" className="details-row heading-row">
          <strong>Chat Data</strong>
          <Chevron />
        </button>

        <div className="details-grid two-col">
          <span>Assignee</span>
          <span className="value with-icon">
            <ContactIcon />
            James West
          </span>
          <span>Team</span>
          <span className="value with-icon">
            <ContactIcon />
            Sales Team
          </span>
        </div>
      </section>

      <section className="details-section">
        <button type="button" className="details-row heading-row">
          <strong>Contact Data</strong>
          <Chevron />
        </button>

        <div className="details-grid two-col">
          <span>First Name</span>
          <span className="value">{contact.first}</span>
          <span>Last Name</span>
          <span className="value">{contact.last}</span>
          <span>Phone number</span>
          <span className="value">{phone}</span>
          <span>Email</span>
          <span className="value email-line">{email}</span>
        </div>

        <button type="button" className="see-all-link">See all</button>
      </section>

      <section className="details-section">
        <button type="button" className="details-row heading-row">
          <strong>Contact Labels</strong>
          <Chevron />
        </button>

        <div className="label-chip-row">
          <button type="button" className="tag-chip">
            <TagIcon />
            Closed Won
          </button>
          <button type="button" className="tag-chip">
            <TagIcon />
            Chicago
          </button>
          <button type="button" className="tag-plus" aria-label="Add label">
            <PlusIcon />
          </button>
        </div>
      </section>

      <section className="details-section">
        <button type="button" className="details-row heading-row">
          <strong>Notes</strong>
          <Chevron />
        </button>

        <div className="note-stack">
          <input type="text" value="Add a note" readOnly />
          <input type="text" value="Strong potential for future upgrades" readOnly />
        </div>
      </section>

      <section className="details-section">
        <button type="button" className="details-row heading-row">
          <strong>Other Chats</strong>
          <Chevron />
        </button>

        <div className="other-chat-row">
          <span className="label-wrap">
            <InstagramIcon />
            <span>
              <strong>Fit4Life</strong>
              <small>On my way!</small>
            </span>
          </span>
          <time>08/08/25</time>
        </div>
      </section>
    </aside>
  )
}
