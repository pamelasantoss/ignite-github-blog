import { CardIntroIssue } from "../../components/CardIntroIssue"

export function Article() {
  return (
    <>
      <CardIntroIssue />

      <div className="flex flex-col p-8">
        <p className="font-nunito text-base-text">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </div>
    </>
  )
}
