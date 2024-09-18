import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from "react"
import { githubAPI } from "../../lib/axios"

interface Issue {
  id: number
  number: number
  title: string
  created_at: string
  body: string
}

interface IssuesContextType {
  issues: Issue[]
  searchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchRepoIssues = async () => {
    const repoPath = import.meta.env.VITE_GITHUB_REPO_ISSUES
    const response = await githubAPI.get(`/repos/${repoPath}/issues`)

    setIssues(response.data)
  }

  const searchIssues = useCallback(async (query?: string) => {
    const repoPath = import.meta.env.VITE_GITHUB_REPO_ISSUES
    const response = await githubAPI.get(
      `/search/issues?q=${query}%20repo:${repoPath}`
    )

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchRepoIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, searchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
