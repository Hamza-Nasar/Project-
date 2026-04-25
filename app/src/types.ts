export type ConversationPriority = 'low' | 'medium' | 'high'
export type ConversationStatus = 'active' | 'waiting' | 'escalated'

export interface Conversation {
  id: number
  userId: number
  name: string
  role: string
  email: string
  phone: string
  avatar: string
  unreadCount: number
  priority: ConversationPriority
  status: ConversationStatus
  lastSeen: string
  openTasks: number
  sentiment: number
}

export interface Message {
  id: string
  conversationId: number
  sender: string
  avatar: string
  text: string
  timestamp: string
  incoming: boolean
  flagged: boolean
}

export interface DashboardData {
  conversations: Conversation[]
  messages: Message[]
}

