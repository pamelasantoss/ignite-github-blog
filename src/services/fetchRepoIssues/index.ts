import { githubAPI } from "../../lib/axios"

export async function fetchRepoIssues(query?: string) {
  const repoPath = import.meta.env.VITE_GITHUB_REPO_ISSUES

  try {
    const response = await githubAPI.get(`/repos/${repoPath}/issues`, {
      params: {
        q: query
      }
    })
    return response.data
  } catch (error) {
    console.error(
      "Sorry, we could fetch the issues from the repository. ",
      error
    )
    return []
  }
}
