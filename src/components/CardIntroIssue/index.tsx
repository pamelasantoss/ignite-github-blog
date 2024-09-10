import {
  ArrowSquareUpRight,
  GithubLogo,
  ArrowLeft,
  ChatCircle,
  CalendarBlank
} from "@phosphor-icons/react"

export function CardIntroIssue() {
  return (
    <div className="bg-base-profile rounded-xl drop-shadow-md -mt-20 flex flex-col gap-4 p-6">
      <div className="flex justify-between items-center">
        <button className="font-nunito text-primary-blue text-xs font-semibold uppercase flex items-center gap-1 pb-1 border-b border-transparent hover:border-primary-blue">
          <ArrowLeft size={20} />
          Voltar
        </button>
        <button className="font-nunito text-primary-blue text-xs font-semibold uppercase flex items-center gap-1 pb-1 border-b border-transparent hover:border-primary-blue">
          Ver no Github
          <ArrowSquareUpRight size={20} />
        </button>
      </div>

      <h1 className="font-nunito text-base-title text-2xl font-semibold">
        JavaScript data types and data structures
      </h1>
      <ul className="flex flex-col md:flex-row gap-1 md:gap-7">
        <li className="font-nunito text-base-span flex items-center gap-2">
          <GithubLogo size={18} weight="fill" className="text-base-label" />
          cameronwll
        </li>
        <li className="font-nunito text-base-span flex items-center gap-2">
          <CalendarBlank size={18} weight="fill" className="text-base-label" />
          Há 1 dia
        </li>
        <li className="font-nunito text-base-span flex items-center gap-2">
          <ChatCircle size={18} weight="fill" className="text-base-label" />5
          comentários
        </li>
      </ul>
    </div>
  )
}
