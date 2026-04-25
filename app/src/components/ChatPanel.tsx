import type { Conversation } from '../types'

interface ChatPanelProps {
  conversation: Conversation | null
}

const DotsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="6" r="1.8" />
    <circle cx="12" cy="12" r="1.8" />
    <circle cx="12" cy="18" r="1.8" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15.5 3.8A8.5 8.5 0 1 0 20.2 16 7 7 0 1 1 15.5 3.8Z" />
  </svg>
)

const ExportIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M12 8v8" />
    <path d="m8.5 11.5 3.5-3.5 3.5 3.5" />
    <path d="M8.5 16h7" />
  </svg>
)

const DoubleTick = () => (
  <span className="tick" aria-hidden="true">
    <svg viewBox="0 0 24 24">
      <path d="m5 13 4 4L19 7" />
    </svg>
    <svg viewBox="0 0 24 24">
      <path d="m5 13 4 4L19 7" />
    </svg>
  </span>
)

const MediaIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <circle cx="8" cy="10" r="1.8" />
    <path d="m6 17 4-4 3 3 3-3 2 2" />
  </svg>
)

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="13" height="14" rx="2" />
    <path d="m16 10 5-3v10l-5-3z" />
  </svg>
)

const NoteIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
)

const SmileIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="10" r="1" />
    <circle cx="15" cy="10" r="1" />
    <path d="M8 15c1 1.2 2.3 2 4 2s3-.8 4-2" />
  </svg>
)

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m10 14 10-10" />
    <path d="M14 4h6v6" />
    <path d="M4 12a6 6 0 0 0 10 4" />
  </svg>
)

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m13 2-7 11h5l-1 9 8-12h-5z" />
  </svg>
)

const MicIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M6 11a6 6 0 0 0 12 0" />
    <path d="M12 17v4" />
  </svg>
)

export const ChatPanel = ({ conversation }: ChatPanelProps) => {
  const email = conversation?.email.toLowerCase() ?? 'olivia.mckinsey@gmail.com'

  return (
    <section className="chat-panel panel-card" aria-label="Active conversation">
      <header className="panel-head">
        <h2>{conversation?.name ?? 'Olivia Mckinsey'}</h2>

        <div className="head-actions">
          <button type="button" className="icon-button light" aria-label="More options">
            <DotsIcon />
          </button>
          <button type="button" className="icon-button light" aria-label="Switch mode">
            <MoonIcon />
          </button>
          <button type="button" className="icon-button dark" aria-label="Export chat">
            <ExportIcon />
          </button>
        </div>
      </header>

      <div className="chat-stream">
        <article className="chat-bubble incoming">
          <p>Hi, I recently joined Fit4Life and I'm trying to access my workout plan, but I can't login. Can you help?</p>
          <time>23:08</time>
        </article>

        <article className="chat-bubble outgoing">
          <p>Hello Olivia 🙋 I'm Michael, your AI customer support assistant. Let's fix this quickly. Could you confirm the email address?</p>
          <div className="bubble-meta">
            <time>23:08</time>
            <DoubleTick />
          </div>
        </article>

        <article className="chat-bubble incoming short">
          <p>Yes, it's {email}</p>
          <time>23:16</time>
        </article>

        <article className="chat-bubble outgoing">
          <p>Thanks! Looks like your reset wasn't completed. I've sent a new link - please check your inbox.</p>
          <div className="bubble-meta">
            <time>23:16</time>
            <DoubleTick />
          </div>
        </article>

        <article className="chat-bubble incoming short">
          <p>I see it. resetting now...</p>
          <time>23:17</time>
        </article>

        <article className="chat-bubble incoming short">
          <p>Done! I'm logged in. Thanks!</p>
          <time>23:20</time>
        </article>

        <article className="chat-bubble outgoing">
          <p>
            Perfect 🎉 Your plan is ready under "My Programs". Since you're starting out, I suggest our Premium Guide - it boosts results and is 20% off here{' '}
            <a href="#" style={{color:'#6d4fc4',textDecoration:'underline'}}>www.Fit4Life.com/Premium</a>
          </p>
          <div className="bubble-meta">
            <time>23:20</time>
            <DoubleTick />
          </div>
        </article>

        <article className="chat-bubble incoming">
          <p>Oh my god 😍 I'll try it ASAP, thank you so much!!</p>
          <time>23:23</time>
        </article>
      </div>

      <footer className="chat-composer" aria-label="Message composer">
        <input type="text" placeholder="Type something...." aria-label="Type a message" />

        <div className="composer-actions">
          <span className="composer-left" aria-hidden="true">
            <MediaIcon />
            <VideoIcon />
            <NoteIcon />
            <SmileIcon />
            <ShareIcon />
          </span>
          <span className="composer-right" aria-hidden="true">
            <BoltIcon />
            <MicIcon />
          </span>
        </div>
      </footer>
    </section>
  )
}
