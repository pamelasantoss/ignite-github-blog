import {
  ArrowSquareUpRight,
  GithubLogo,
  ArrowLeft,
  ChatCircle,
  CalendarBlank
} from "@phosphor-icons/react"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useNavigate } from "react-router-dom"

interface CardIntroIssueProps {
  title: string
  issueLink: string
  user: {
    login: string
    html_url: string
  }
  created_at: string
  comments: number
}

export function CardIntroIssue({
  title,
  issueLink,
  user,
  created_at,
  comments
}: CardIntroIssueProps) {
  const navigate = useNavigate()

  const goBackToHomePage = () => {
    navigate("/")
  }

  const publishedDateFormatted = formatDistanceToNow(created_at, {
    locale: ptBR,
    addSuffix: true
  })

  const commentsText =
    comments > 1 ? `${comments} comentários` : `${comments} comentário`

  return (
    <div className="bg-base-profile rounded-xl drop-shadow-md -mt-20 flex flex-col gap-4 p-6">
      <div className="flex justify-between items-center">
        <button
          onClick={goBackToHomePage}
          className="font-nunito text-primary-blue text-xs font-semibold uppercase flex items-center gap-1 pb-1 border-b border-transparent hover:border-primary-blue"
        >
          <ArrowLeft size={20} />
          Voltar
        </button>
        <a
          href={issueLink}
          target="_blank"
          className="font-nunito text-primary-blue text-xs font-semibold uppercase flex items-center gap-1 pb-1 border-b border-transparent hover:border-primary-blue"
        >
          Ver no Github
          <ArrowSquareUpRight size={20} />
        </a>
      </div>

      <h1 className="font-nunito text-base-title text-2xl font-semibold">
        {title}
      </h1>
      <ul className="flex flex-col md:flex-row gap-1 md:gap-7">
        <li className="font-nunito text-base-span flex items-center gap-2">
          <a
            href={user?.html_url}
            target="_blank"
            title={user?.login}
            className="font-nunito text-base-subtitle flex items-center gap-2 hover:underline"
          >
            <GithubLogo size={18} weight="fill" className="text-base-label" />
            {user?.login}
          </a>
        </li>
        <li className="font-nunito text-base-span flex items-center gap-2">
          <CalendarBlank size={18} weight="fill" className="text-base-label" />
          {publishedDateFormatted}
        </li>
        <li className="font-nunito text-base-span flex items-center gap-2">
          <ChatCircle size={18} weight="fill" className="text-base-label" />
          {commentsText}
        </li>
      </ul>
    </div>
  )
}
