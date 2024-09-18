import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { IssuesContext } from "../../contexts/IssuesContext"

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { searchIssues } = useContext(IssuesContext)
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearchIssues = async (data: SearchFormInputs) => {
    await searchIssues(data.query)
  }

  return (
    <form className="flex mt-3" onSubmit={handleSubmit(handleSearchIssues)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")}
        className="flex-1 rounded-md border-2 border-base-border p-3 bg-base-input text-base-text placeholder:text-base-label focus:outline-none focus:ring focus:ring-primary-blue"
      />
    </form>
  )
}
