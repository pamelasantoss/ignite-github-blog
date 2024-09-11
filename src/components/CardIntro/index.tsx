import {
  ArrowSquareUpRight,
  GithubLogo,
  Building,
  Users
} from "@phosphor-icons/react"
import { githubAPI } from "../../lib/axios"
import { useEffect, useState } from "react"

interface UserInfo {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string | null
  followers: number
}

export function CardIntro() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  const fetchUserInfo = async () => {
    const user = import.meta.env.VITE_GITHUB_USER
    const response = await githubAPI.get(`/users/${user}`)
    setUserInfo(response.data)
  }

  const goToGithubPage = () => {
    console.log("Go to: ", `https://github.com/${userInfo?.login}`)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  const showUserImage = userInfo?.avatar_url
    ? userInfo?.avatar_url
    : "https://placehold.co/148x148"

  return (
    <div className="bg-base-profile rounded-xl drop-shadow-md -mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 relative">
      <button
        onClick={goToGithubPage}
        className="absolute top-6 right-6 font-nunito text-primary-blue text-xs font-semibold uppercase flex items-center gap-1 pb-1 border-b border-transparent hover:border-primary-blue"
      >
        Github
        <ArrowSquareUpRight size={20} />
      </button>

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
          {userInfo?.name}
        </h1>
        {userInfo?.bio && (
          <p className="font-nunito text-base-text my-2">{userInfo?.bio}</p>
        )}
        <ul className="flex flex-col md:flex-row gap-1 md:gap-7 pt-3">
          <li>
            <a
              href={`https://github.com/${userInfo?.login}`}
              target="_blank"
              title={userInfo?.login}
              className="font-nunito text-base-subtitle flex items-center gap-2 hover:underline"
            >
              <GithubLogo size={18} weight="fill" className="text-base-label" />
              {userInfo?.login}
            </a>
          </li>
          {userInfo?.company && (
            <li className="font-nunito text-base-subtitle flex items-center gap-2">
              <Building size={18} weight="fill" className="text-base-label" />
              {userInfo?.company}
            </li>
          )}
          <li className="font-nunito text-base-subtitle flex items-center gap-2">
            <Users size={18} weight="fill" className="text-base-label" />
            {userInfo?.followers} seguidores
          </li>
        </ul>
      </div>
    </div>
  )
}
