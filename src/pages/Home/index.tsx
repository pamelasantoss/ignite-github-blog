import { CardIntro } from "../../components/CardIntro"
import { CardIssue } from "../../components/CardIssue"
import { SearchForm } from "../../components/SearchForm"
import { useGithubIssuesData } from "../../hooks/useGithubIssuesData"

export function Home() {
  const { issues } = useGithubIssuesData()
  const issuesQuantity =
    issues.length > 1
      ? `${issues.length} publicações`
      : `${issues.length} publicação`

  return (
    <>
      <CardIntro />

      <div className="flex flex-col pt-20 pb-6">
        <div className="flex justify-between items-center">
          <h2 className="font-nunito text-base-subtitle text-lg font-semibold">
            Publicações
          </h2>
          <span className="font-nunito text-base-span text-sm">
            {issuesQuantity}
          </span>
        </div>
        <SearchForm />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {issues.map(issue => (
          <CardIssue
            key={issue.id}
            id={issue.number}
            title={issue.title}
            body={issue.body}
            date={issue.created_at}
          />
        ))}
      </div>
    </>
  )
}
