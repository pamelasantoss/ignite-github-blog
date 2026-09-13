import { CardIntroIssue } from "../../components/CardIntroIssue"
import { ArticleContent } from "../../components/ArticleContent"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { githubAPI } from "../../lib/axios"

interface Issue {
  title: string
  html_url: string
  user: {
    login: string
    html_url: string
  }
  created_at: string
  comments: number
  body: string
}

export function Article() {
  const { id } = useParams()
  const [issue, setIssue] = useState<Issue | null>(null)

  const repoPath = import.meta.env.VITE_GITHUB_REPO_ISSUES

  useEffect(() => {
    githubAPI
      .get(`/repos/${repoPath}/issues/${id}`)
      .then(response => setIssue(response.data))
  }, [repoPath, id])

  if (!issue) {
    return <p>Something went wrong :(</p>
  }

  return (
    <>
      <CardIntroIssue
        title={issue.title}
        issueLink={issue.html_url}
        user={issue.user}
        created_at={issue.created_at}
        comments={issue.comments}
      />

      <div className="flex flex-col p-8">
        <ArticleContent body={issue.body} />
      </div>
    </>
  )
}
