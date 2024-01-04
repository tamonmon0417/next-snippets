'use client'

import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'

interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>
      Client component has snippet with title {snippet.title}
      <Editor
        height={'40vh'}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
      />
    </div>
  )
}
