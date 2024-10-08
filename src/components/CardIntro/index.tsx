import {
  ArrowSquareUpRight,
  GithubLogo,
  Building,
  Users
} from "@phosphor-icons/react"
import { useGithubUserData } from "../../hooks/useGithubUserData"

export function CardIntro() {
  const { userData } = useGithubUserData()

  const showUserImage = userData?.avatar_url
    ? userData?.avatar_url
    : "https://placehold.co/148x148"

  return (
    <div className="bg-base-profile rounded-xl drop-shadow-md -mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 relative">
      <a
        href={`https://github.com/${userData?.login}`}
        target="_blank"
        className="absolute top-6 right-6 font-nunito text-primary-blue text-xs font-semibold uppercase flex items-center gap-1 pb-1 border-b border-transparent hover:border-primary-blue"
      >
        Github
        <ArrowSquareUpRight size={20} />
      </a>

      <div className="min-w-36">
        <img
          src={showUserImage}
          alt=""
          className="rounded-lg"
          width={148}
          height={148}
        />
      </div>

      <div className="flex-1">
        <h1 className="font-nunito text-base-title text-2xl font-semibold">
          {userData?.name}
        </h1>
        {userData?.bio && (
          <p className="font-nunito text-base-text my-2">{userData?.bio}</p>
        )}
        <ul className="flex flex-col md:flex-row gap-1 md:gap-7 pt-3">
          <li>
            <a
              href={`https://github.com/${userData?.login}`}
              target="_blank"
              title={userData?.login}
              className="font-nunito text-base-subtitle flex items-center gap-2 hover:underline"
            >
              <GithubLogo size={18} weight="fill" className="text-base-label" />
              {userData?.login}
            </a>
          </li>
          {userData?.company && (
            <li className="font-nunito text-base-subtitle flex items-center gap-2">
              <Building size={18} weight="fill" className="text-base-label" />
              {userData?.company}
            </li>
          )}
          <li className="font-nunito text-base-subtitle flex items-center gap-2">
            <Users size={18} weight="fill" className="text-base-label" />
            {userData?.followers} seguidores
          </li>
        </ul>
      </div>
    </div>
  )
}
