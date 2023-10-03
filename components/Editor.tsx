'use client'

import { updateEntry } from '@/utils/api'
import { type } from 'os'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

type EditorParams = {
  entry: {
    id: string
    content: string
  }
}

const Editor = ({ entry }: EditorParams) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  useAutosave({
    data: value,
    onSave: async (_value: unknown) => {
      setIsLoading(true)
      const updated = await updateEntry(entry.id, _value as string)
      setIsLoading(false)
    },
  })
  return (
    <div className="w-full h-full">
      {isLoading && <div>...Loading</div>}
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  )
}

export default Editor
