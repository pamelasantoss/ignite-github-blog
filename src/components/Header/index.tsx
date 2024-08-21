import githubBlogLogo from "../../assets/github-blog-logo.svg"

export function Header() {
  return (
    <div className="bg-base-profile bg-header-pattern bg-no-repeat bg-cover flex justify-center items-start w-full min-h-72 relative">
      <div className="bg-header-pattern-blur w-full h-full absolute top-0 left-0 bg-no-repeat bg-center" />
      <img src={githubBlogLogo} alt="Github Blog Logo" className="mt-10" />
    </div>
  )
}
