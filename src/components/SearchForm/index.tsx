export function SearchForm() {
  return (
    <form className="flex mt-3">
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="flex-1 rounded-md border-2 border-base-border p-3 bg-base-input text-base-text placeholder:text-base-label focus:outline-none focus:ring focus:ring-primary-blue"
      />
    </form>
  )
}
