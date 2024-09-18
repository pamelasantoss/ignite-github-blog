import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { fetchRepoIssues } from "../../services/fetchRepoIssues"

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    mode: "onChange"
  })

  const handleSearchIssues = async (data: SearchFormInputs) => {
    await fetchRepoIssues(data.query)
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
