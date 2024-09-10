import { Link } from "react-router-dom"

export function CardIssue() {
  return (
    <Link to="/article/1">
      <div className="bg-base-post rounded-lg p-8 max-h-64">
        <div className="flex items-baseline">
          <h3 className="font-nunito text-base-title text-xl font-semibold flex-1 pr-6">
            JavaScript data types and data structures
          </h3>
          <span className="font-nunito text-base-span text-sm">Há 1 dia</span>
        </div>
        <p className="font-nunito text-base-text mt-4 text-ellipsis overflow-hidden max-h-[100px]">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </div>
    </Link>
  )
}
