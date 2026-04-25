import type { Conversation, ConversationPriority, ConversationStatus, DashboardData, Message } from '../types'

const API_ROOT = 'https://dummyjson.com'

interface ApiUsersResponse {
  users: Array<{
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    image: string
    company?: {
      title?: string
    }
  }>
}

interface ApiCommentsResponse {
  comments: Array<{
    id: number
    body: string
    user: {
      id: number
      username: string
      fullName?: string
    }
  }>
}

interface ApiPostsResponse {
  posts: Array<{
    id: number
    title: string
    body: string
  }>
}

const priorities: ConversationPriority[] = ['low', 'medium', 'high']
const statuses: ConversationStatus[] = ['active', 'waiting', 'escalated']

const fetchJson = async <T>(path: string, signal?: AbortSignal): Promise<T> => {
  const response = await fetch(`${API_ROOT}${path}`, { signal })

  if (!response.ok) {
    throw new Error(`API request failed for ${path} (${response.status})`)
  }

  return (await response.json()) as T
}

const previewNames = [
  'Olivia Mckinsey',
  'Sara Williams',
  'Frank Thompson',
  'Grace Lee',
  'Henry Adams',
  'Isabella Martinez',
  'James Brown',
  'Katherine White',
  'Lucas Green',
  'Lily Brooks',
]

const previewEmails = [
  'olivia.Mckinsey@gmail.com',
  'sara.williams@gmail.com',
  'frank.thompson@gmail.com',
  'grace.lee@gmail.com',
  'henry.adams@gmail.com',
  'isabella.martinez@gmail.com',
  'james.brown@gmail.com',
  'katherine.white@gmail.com',
  'lucas.green@gmail.com',
  'lily.brooks@gmail.com',
]

const previewRoles = [
  "Oh my god 😍 I'll try it ASAP, thank...",
  'Good Evening, Emily! Hope you are...',
  'Thank you for signing up Frank! If t...',
  'I am sending you the report right a...',
  'Thank you for filling out our survey!',
  'I will update you soon Isabella!',
  'Hello James! Let\'s collaborate on...',
  'Hi Katherine, looking forward to our...',
  'Hey Lucas! Ready for the holiday...',
  'Your ticket is now in progress.',
]

const previewTimes = ['23:23', '23:16', '22:28', '20:43', '17:37', '16:01', '13:44', '09:02', 'Yesterday', '13:52']

const refineReply = (text: string): string => {
  if (text.length <= 66) {
    return `Noted. ${text}`
  }

  return `Noted. ${text.slice(0, 66).trimEnd()}...`
}

const buildConversations = (users: ApiUsersResponse['users']): Conversation[] => {
  return users.slice(0, 10).map((user, index) => ({
    id: index + 1,
    userId: user.id,
    name: previewNames[index] ?? `${user.firstName} ${user.lastName}`,
    role: previewRoles[index] ?? user.company?.title ?? 'Account Contact',
    email: previewEmails[index] ?? user.email,
    phone: user.phone,
    avatar: user.image,
    unreadCount: (index * 3) % 6,
    priority: priorities[index % priorities.length],
    status: statuses[index % statuses.length],
    lastSeen: previewTimes[index] ?? '12:00',
    openTasks: ((index + 3) * 2) % 9 + 1,
    sentiment: 64 + ((index * 9) % 27),
  }))
}

const buildMessages = (
  conversations: Conversation[],
  comments: ApiCommentsResponse['comments'],
  posts: ApiPostsResponse['posts'],
): Message[] => {
  const commentsByUser = new Map<number, ApiCommentsResponse['comments']>()

  for (const comment of comments) {
    const bucket = commentsByUser.get(comment.user.id) ?? []
    bucket.push(comment)
    commentsByUser.set(comment.user.id, bucket)
  }

  return conversations.flatMap((conversation, index) => {
    const fallbackComments = comments.slice(index * 4, index * 4 + 4)
    const source = commentsByUser.get(conversation.userId)
    const selected = (source?.length ? source : fallbackComments).slice(0, 4)

    return selected.flatMap((comment, messageIndex) => {
      const post = posts[(comment.id + messageIndex) % posts.length]
      const incomingMessage: Message = {
        id: `${conversation.id}-${comment.id}-incoming`,
        conversationId: conversation.id,
        sender: conversation.name,
        avatar: conversation.avatar,
        text: `${comment.body} ${post ? `(${post.title})` : ''}`.trim(),
        timestamp: `${9 + messageIndex}:${messageIndex % 2 === 0 ? '15' : '40'} AM`,
        incoming: true,
        flagged: messageIndex === 1 && conversation.priority === 'high',
      }

      const outgoingMessage: Message = {
        id: `${conversation.id}-${comment.id}-outgoing`,
        conversationId: conversation.id,
        sender: 'You',
        avatar: '',
        text: refineReply(comment.body),
        timestamp: `${10 + messageIndex}:${messageIndex % 2 === 0 ? '05' : '30'} AM`,
        incoming: false,
        flagged: false,
      }

      return [incomingMessage, outgoingMessage]
    })
  })
}

export const fetchDashboardData = async (signal?: AbortSignal): Promise<DashboardData> => {
  const [usersData, commentsData, postsData] = await Promise.all([
    fetchJson<ApiUsersResponse>('/users?limit=20&skip=0', signal),
    fetchJson<ApiCommentsResponse>('/comments?limit=100&skip=0', signal),
    fetchJson<ApiPostsResponse>('/posts?limit=30&skip=0', signal),
  ])

  const conversations = buildConversations(usersData.users)
  const messages = buildMessages(conversations, commentsData.comments, postsData.posts)

  return {
    conversations,
    messages,
  }
}

