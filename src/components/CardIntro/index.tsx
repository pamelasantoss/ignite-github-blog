import {
  ArrowSquareUpRight,
  GithubLogo,
  Building,
  Users
} from "@phosphor-icons/react"

export function CardIntro() {
  return (
    <div className="bg-base-profile rounded-xl drop-shadow-md -mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 relative">
      <button className="absolute top-6 right-6 font-nunito text-primary-blue text-xs font-semibold uppercase flex items-center gap-1 pb-1 border-b border-transparent hover:border-primary-blue">
        Github
        <ArrowSquareUpRight size={20} />
      </button>

      <div className="min-w-36">
        <img src="https://placehold.co/148x148" alt="" className="rounded-lg" />
      </div>

      <div>
        <h1 className="font-nunito text-base-title text-2xl font-semibold">
          Cameron Williamson
        </h1>
        <p className="font-nunito text-base-text my-2">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul className="flex flex-col md:flex-row gap-1 md:gap-7 pt-3">
          <li>
            <a
              href="#"
              target="_blank"
              title=""
              className="font-nunito text-base-subtitle flex items-center gap-2 hover:underline"
            >
              <GithubLogo size={18} weight="fill" className="text-base-label" />
              cameronwll
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              title=""
              className="font-nunito text-base-subtitle flex items-center gap-2 hover:underline"
            >
              <Building size={18} weight="fill" className="text-base-label" />
              Rocketseat
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              title=""
              className="font-nunito text-base-subtitle flex items-center gap-2 hover:underline"
            >
              <Users size={18} weight="fill" className="text-base-label" />
              32 seguidores
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
