import githubBlogLogo from "../../assets/github-blog-logo.svg"

export function Header() {
  return (
    <div className="bg-base-profile bg-header-pattern bg-no-repeat bg-cover flex justify-center items-center w-full min-h-72">
      <img src={githubBlogLogo} alt="Github Blog Logo" />
    </div>
  )
}
