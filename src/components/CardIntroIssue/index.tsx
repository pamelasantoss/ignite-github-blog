import {
  ArrowSquareUpRight,
  GithubLogo,
  ArrowLeft,
  ChatCircle,
  CalendarBlank
} from "@phosphor-icons/react"

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
  const goToIssueGithubPage = () => {
    // TODO: Redirect user to issue github page
    console.log("Go to: ", issueLink)
  }

  const commentsText =
    comments > 1 ? `${comments} comentários` : `${comments} comentário`

  return (
    <div className="bg-base-profile rounded-xl drop-shadow-md -mt-20 flex flex-col gap-4 p-6">
      <div className="flex justify-between items-center">
        <button className="font-nunito text-primary-blue text-xs font-semibold uppercase flex items-center gap-1 pb-1 border-b border-transparent hover:border-primary-blue">
          <ArrowLeft size={20} />
          Voltar
        </button>
        <button
          onClick={goToIssueGithubPage}
          className="font-nunito text-primary-blue text-xs font-semibold uppercase flex items-center gap-1 pb-1 border-b border-transparent hover:border-primary-blue"
        >
          Ver no Github
          <ArrowSquareUpRight size={20} />
        </button>
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
          Há 1 dia - {created_at}
        </li>
        <li className="font-nunito text-base-span flex items-center gap-2">
          <ChatCircle size={18} weight="fill" className="text-base-label" />
          {commentsText}
        </li>
      </ul>
    </div>
  )
}
