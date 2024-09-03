import { CardIntro } from "../../components/CardIntro"
import { CardIssue } from "../../components/CardIssue"
import { SearchForm } from "../../components/SearchForm"

export function Home() {
  return (
    <>
      <CardIntro />

      <div className="flex flex-col pt-20 pb-6">
        <div className="flex justify-between items-center">
          <h2 className="font-nunito text-base-subtitle text-lg font-semibold">
            Publicações
          </h2>
          <span className="font-nunito text-base-span text-sm">
            6 publicações
          </span>
        </div>
        <SearchForm />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <CardIssue />
        <CardIssue />
        <CardIssue />
        <CardIssue />
        <CardIssue />
        <CardIssue />
      </div>
    </>
  )
}
