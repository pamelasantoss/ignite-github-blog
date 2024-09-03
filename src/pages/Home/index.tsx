import { CardIntro } from "../../components/CardIntro"
import { CardIssue } from "../../components/CardIssue"

export function Home() {
  return (
    <>
      <CardIntro />

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
