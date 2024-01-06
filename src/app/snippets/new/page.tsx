'use client'

import { createSnippet } from '@/actions'
import { db } from '@/db'
import { notFound, redirect } from 'next/navigation'
import { useFormState } from 'react-dom'

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(createSnippet, {
    message: '',
  })

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>

        {formState.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        )}

        <button type="submit" className="border rounded p-2 bg-blue-200">
          Submit
        </button>
      </div>
    </form>
  )
}
