const listSkeletonRows = Array.from({ length: 7 }, (_, index) => index)

const topNavItems = ['Inbox', 'Contacts', 'AI Employees', 'Workflows', 'Campaigns']

export const LoadingScreen = () => {
  return (
    <main className="loading-shell" aria-live="polite" aria-busy="true">
      <section className="loading-stage">

        {/* floating honeycomb icons */}
        <span className="honey-icon one" aria-hidden="true">
          <svg width="48" height="56" viewBox="0 0 40 46" fill="none">
            <path d="M20 2L37 11.5V29.5L20 39L3 29.5V11.5L20 2Z" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5"/>
            <text x="13" y="26" fontSize="12" fill="rgba(147,197,253,0.9)">✦</text>
          </svg>
        </span>
        <span className="honey-icon two" aria-hidden="true">
          <svg width="44" height="52" viewBox="0 0 40 46" fill="none">
            <path d="M20 2L37 11.5V29.5L20 39L3 29.5V11.5L20 2Z" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5"/>
            <text x="11" y="26" fontSize="11" fill="rgba(147,197,253,0.9)">▢</text>
          </svg>
        </span>
        <span className="honey-icon three" aria-hidden="true">
          <svg width="38" height="44" viewBox="0 0 40 46" fill="none">
            <path d="M20 2L37 11.5V29.5L20 39L3 29.5V11.5L20 2Z" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5"/>
            <text x="10" y="27" fontSize="13" fill="rgba(147,197,253,0.9)">⑂</text>
          </svg>
        </span>
        <span className="honey-icon four" aria-hidden="true">
          <svg width="40" height="48" viewBox="0 0 40 46" fill="none">
            <path d="M20 2L37 11.5V29.5L20 39L3 29.5V11.5L20 2Z" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5"/>
            <text x="12" y="26" fontSize="12" fill="rgba(147,197,253,0.9)">◉</text>
          </svg>
        </span>
        <span className="honey-icon five" aria-hidden="true">
          <svg width="36" height="42" viewBox="0 0 40 46" fill="none">
            <path d="M20 2L37 11.5V29.5L20 39L3 29.5V11.5L20 2Z" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5"/>
            <text x="10" y="27" fontSize="13" fill="rgba(147,197,253,0.9)">⑃</text>
          </svg>
        </span>

        {/* glowing orb */}
        <div className="loading-ring" aria-hidden="true" />

        <h1>Extracting Information...</h1>
        <p>We are extracting information from the above honey combs to your system</p>

        {/* mini skeleton preview */}
        <section className="loading-preview" aria-hidden="true">
          <header className="preview-topbar">
            <strong>BOXpad</strong>
            <nav>
              {topNavItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </nav>
            <span className="preview-user">Michael Johnson</span>
          </header>

          <div className="preview-grid">
            <aside>
              <span className="preview-title" />
              {listSkeletonRows.map((row) => (
                <span key={`left-${row}`} className="preview-line" />
              ))}
            </aside>

            <section>
              <span className="preview-title" />
              {listSkeletonRows.map((row) => (
                <span key={`list-${row}`} className="preview-card" />
              ))}
            </section>

            <section>
              <span className="preview-title" />
              {listSkeletonRows.slice(0, 5).map((row) => (
                <span key={`thread-${row}`} className="preview-bubble" />
              ))}
              <span className="preview-input" />
            </section>

            <aside>
              <span className="preview-title" />
              {listSkeletonRows.slice(0, 6).map((row) => (
                <span key={`right-${row}`} className="preview-line" />
              ))}
            </aside>
          </div>
        </section>
      </section>
    </main>
  )
}
