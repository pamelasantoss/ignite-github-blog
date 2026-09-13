import Markdown, { Components } from "react-markdown"

interface ArticleContentProps {
  body: string
}

export function ArticleContent({ body }: ArticleContentProps) {
  const renderers: Components = {
    h3: ({ children, ...props }: React.ComponentPropsWithoutRef<"h3">) => (
      <h3 className="text-xl font-bold my-4" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: React.ComponentPropsWithoutRef<"h4">) => (
      <h4 className="text-lg font-bold my-3" {...props}>
        {children}
      </h4>
    ),
    p: ({ children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
      <p className="text-base leading-relaxed my-2" {...props}>
        {children}
      </p>
    ),
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <img src={src} alt={alt} className="max-w-full h-auto rounded-lg" />
    ),
    ul: ({ children, ...props }: React.ComponentPropsWithoutRef<"ul">) => (
      <ul className="list-disc list-inside my-3" {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }: React.ComponentPropsWithoutRef<"li">) => (
      <li className="ml-4 my-2" {...props}>
        {children}
      </li>
    ),
    pre: ({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) => (
      <pre
        className="bg-gray-800 text-white p-4 rounded-xl my-4 overflow-x-auto"
        {...props}
      >
        {children}
      </pre>
    ),
    code: ({ children, ...props }: React.ComponentPropsWithoutRef<"code">) => (
      <code className="bg-gray-800 text-white p-1 rounded" {...props}>
        {children}
      </code>
    )
  }

  const markdownText = body ? body : ""

  return (
    <div className="font-nunito text-base-text">
      <Markdown components={renderers}>{markdownText}</Markdown>
    </div>
  )
}
