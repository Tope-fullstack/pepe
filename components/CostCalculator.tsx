import { useState } from 'react'
import { calculateCost } from '../utils/cost'

export default function CostCalculator() {
  const [distance, setDistance] = useState('')
  const [time, setTime] = useState('')
  const [cost, setCost] = useState(null)

  const handleCalculate = () => {
    setCost(calculateCost(Number(distance), Number(time)))
  }

  return (
    <div className="my-4">
      <input className="input" type="number" placeholder="Distance (km)" value={distance} onChange={e => setDistance(e.target.value)} />
      <input className="input" type="number" placeholder="Time (hours)" value={time} onChange={e => setTime(e.target.value)} />
      <button className="btn" onClick={handleCalculate}>Calculate Cost</button>
      {cost && <div className="mt-2">Estimated Cost: ₦{cost}</div>}
    </div>
  )
}