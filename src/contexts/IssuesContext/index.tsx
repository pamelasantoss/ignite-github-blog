import { createContext, ReactNode, useEffect, useState } from "react"
import { fetchRepoIssues } from "../../services/fetchRepoIssues"

interface Issue {
  id: number
  number: number
  title: string
  created_at: string
  body: string
}

interface IssuesContextType {
  issues: Issue[]
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const getAllIssues = async () => {
    const fetchIssues = await fetchRepoIssues()
    if (!fetchIssues) {
      return
    }
    setIssues(fetchIssues)
  }

  useEffect(() => {
    getAllIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  )
}
