import { useEffect, useState } from "react"
import { githubAPI } from "../../lib/axios"

interface UserData {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string | null
  followers: number
}

export function useGithubUserData() {
  const [userData, setUserData] = useState<UserData | null>(null)

  const fetchUserInfo = async () => {
    const user = import.meta.env.VITE_GITHUB_USER
    const response = await githubAPI.get(`/users/${user}`)
    setUserData(response.data)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return {
    userData
  }
}
