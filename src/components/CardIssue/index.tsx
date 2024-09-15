import { Link } from "react-router-dom"

interface CardIssueProps {
  id: number
  title: string
  body: string
  date: string
}

export function CardIssue({ id, title, body, date }: CardIssueProps) {
  console.log("Data: ", date)

  return (
    <Link to={`/article/${id}`}>
      <div className="bg-base-post rounded-lg p-8 max-h-64">
        <div className="flex items-baseline">
          <h3 className="font-nunito text-base-title text-xl font-semibold flex-1 pr-6">
            {title}
          </h3>
          <span className="font-nunito text-base-span text-sm">Há 1 dia</span>
        </div>
        <p className="font-nunito text-base-text mt-4 text-ellipsis overflow-hidden max-h-[100px]">
          {body}
        </p>
      </div>
    </Link>
  )
}
