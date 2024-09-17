import { useEffect, useState } from "react"
import { fetchRepoIssues } from "../../services/fetchRepoIssues"

interface IssueData {
  id: number
  number: number
  title: string
  created_at: string
  body: string
}

export function useGithubIssuesData() {
  const [issues, setIssues] = useState<IssueData[]>([])

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

  return {
    issues
  }
}
