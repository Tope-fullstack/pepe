import { useState } from 'react'

export default function OrderForm() {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [distance, setDistance] = useState(0)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // API call to create order
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow max-w-md mx-auto">
      <h2 className="font-bold text-lg mb-2">Create Order</h2>
      <input className="input" placeholder="Pickup Location" value={pickup} onChange={e => setPickup(e.target.value)} required />
      <input className="input" placeholder="Dropoff Location" value={dropoff} onChange={e => setDropoff(e.target.value)} required />
      {/* Calculate distance/time */}
      <button className="btn mt-2 w-full">Create</button>
    </form>
  )
}