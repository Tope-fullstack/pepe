import { useRef } from 'react'

export default function WaybillUpload() {
  const fileInput = useRef(null)

  const handleUpload = (e) => {
    const file = fileInput.current.files[0]
    // Handle upload logic
  }

  return (
    <form onSubmit={handleUpload} className="bg-white p-4 rounded shadow max-w-md mx-auto">
      <h2 className="font-bold text-lg mb-2">Upload Manual Waybill</h2>
      <input type="file" ref={fileInput} className="input" required />
      <button className="btn mt-2 w-full">Upload</button>
    </form>
  )
}

import { useRef } from 'react'

export default function WaybillUpload({ token }) {
  const fileInput = useRef(null)

  const handleUpload = async (e) => {
    e.preventDefault()
    const file = fileInput.current.files[0]
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('http://localhost:8000/api/waybills/manual', {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    })
    const data = await res.json()
    alert('Uploaded: ' + data.url)
  }

  return (
    <form onSubmit={handleUpload}>
      <input type="file" ref={fileInput} />
      <button type="submit">Upload</button>
    </form>
  )
}