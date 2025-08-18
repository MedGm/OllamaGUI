import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

type Props = {
  content: string
}

export default function Markdown({ content }: Props) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        // GitHub-flavored markdown (tables, task lists, strikethrough)
        remarkPlugins={[remarkGfm]}
        // Syntax highlighting via highlight.js (rehype)
        rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
        components={{
          code(codeProps) {
            const { inline, className, children, ...props } = codeProps as any
            if (inline) {
              return (
                <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-900" {...props}>
                  {children}
                </code>
              )
            }
            // For block code, let our custom <pre> handle the wrapper.
            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          pre(preProps) {
            // Extract language and raw text from the inner <code>
            const child: any = Array.isArray(preProps.children) ? preProps.children[0] : preProps.children
            let lang = ''
            let codeText = ''
            if (child && child.props) {
              const cls = child.props.className || ''
              const match = /language-(\w+)/.exec(cls)
              lang = match?.[1] || ''
              const inner = child.props.children
              codeText = Array.isArray(inner) ? inner.join('') : String(inner ?? '')
            }
            return (
              <div className="my-4 overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-[#0a0a0a]">
                <div className="px-3 py-2 text-xs text-gray-300 bg-[#111] border-b border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="ml-3 truncate opacity-80">{lang || 'code'}</span>
                  </div>
                  <button
                    onClick={async () => { try { await navigator.clipboard.writeText(codeText) } catch { /* noop */ } }}
                    className="px-2 py-1 rounded border border-gray-700 text-gray-300 hover:bg-gray-800"
                    title="Copy code"
                  >
                    Copy
                  </button>
                </div>
                <pre className="overflow-x-auto m-0 p-3 text-sm leading-6 text-gray-100">
                  {preProps.children}
                </pre>
              </div>
            )
          },
          a({ children, ...props }) {
            return (
              <a className="text-blue-600 hover:underline" target="_blank" rel="noreferrer" {...(props as any)}>
                {children}
              </a>
            )
          },
          table({ children }) {
            return (
              <div className="overflow-x-auto my-4 border border-gray-200 rounded-lg">
                <table className="min-w-full text-sm">{children}</table>
              </div>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
