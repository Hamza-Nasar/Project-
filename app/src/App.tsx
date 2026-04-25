import { useEffect, useMemo, useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { TopBar } from './components/TopBar'
import { Sidebar } from './components/Sidebar'
import { ConversationPane } from './components/ConversationPane'
import { ChatPanel } from './components/ChatPanel'
import { DetailsPanel } from './components/DetailsPanel'
import { fetchDashboardData } from './services/dashboardApi'
import type { DashboardData } from './types'
import './App.css'

type UiState = 'loading' | 'dashboard1' | 'ready' | 'error'
type DashboardVariant = 'dashboard1' | 'dashboard2'

const minimumLoadingDurationMs = 1400
const dashboardTransitionDurationMs = 1100

const getForcedDashboardVariant = (): DashboardVariant | null => {
  const state = new URLSearchParams(window.location.search).get('state')

  if (state === 'dashboard1' || state === 'dashboard2') {
    return state
  }

  return null
}

function App() {
  const [uiState, setUiState] = useState<UiState>('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const [data, setData] = useState<DashboardData>({ conversations: [], messages: [] })
  const [selectedConversationId, setSelectedConversationId] = useState<number>(0)
  const [reloadToken, setReloadToken] = useState(0)

  useEffect(() => {
    const startedAt = performance.now()
    const controller = new AbortController()
    let active = true

    const loadData = async () => {
      setUiState('loading')
      setErrorMessage('')

      try {
        const dashboard = await fetchDashboardData(controller.signal)
        const elapsed = performance.now() - startedAt

        if (elapsed < minimumLoadingDurationMs) {
          await new Promise((resolve) => {
            setTimeout(resolve, minimumLoadingDurationMs - elapsed)
          })
        }

        if (!active) {
          return
        }

        setData(dashboard)
        setSelectedConversationId(dashboard.conversations[0]?.id ?? 0)

        const forcedVariant = getForcedDashboardVariant()
        if (forcedVariant === 'dashboard1') {
          setUiState('dashboard1')
          return
        }

        if (forcedVariant === 'dashboard2') {
          setUiState('ready')
          return
        }

        setUiState('dashboard1')
        await new Promise((resolve) => {
          setTimeout(resolve, dashboardTransitionDurationMs)
        })

        if (!active) {
          return
        }

        setUiState('ready')
      } catch (error) {
        if (!active || controller.signal.aborted) {
          return
        }

        setUiState('error')
        setErrorMessage(error instanceof Error ? error.message : 'Something went wrong while loading.')
      }
    }

    void loadData()

    return () => {
      active = false
      controller.abort()
    }
  }, [reloadToken])

  const selectedConversation = useMemo(() => {
    return data.conversations.find((conversation) => conversation.id === selectedConversationId) ?? null
  }, [data.conversations, selectedConversationId])

  if (uiState === 'loading') {
    return <LoadingScreen />
  }

  if (uiState === 'error') {
    return (
      <main className="error-shell" role="alert">
        <h1>Unable to load workspace</h1>
        <p>{errorMessage}</p>
        <button type="button" onClick={() => setReloadToken((value) => value + 1)}>
          Retry
        </button>
      </main>
    )
  }

  return (
    <main className="app-shell">
      <TopBar variant={uiState === 'dashboard1' ? 'dashboard1' : 'dashboard2'} />

      <section className="workspace-frame">
        <Sidebar
          variant={uiState === 'dashboard1' ? 'dashboard1' : 'dashboard2'}
          conversations={data.conversations}
          totalConversations={28}
          unassignedConversations={5}
        />
        <ConversationPane
          conversations={data.conversations}
          selectedConversationId={selectedConversation?.id ?? 0}
          onSelectConversation={setSelectedConversationId}
        />
        <ChatPanel conversation={selectedConversation} />
        <DetailsPanel conversation={selectedConversation} />
      </section>
    </main>
  )
}

export default App
