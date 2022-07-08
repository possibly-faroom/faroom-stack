import React from "react"
import { useAtomValue } from "jotai"
import { countingState } from "../utils/atoms"

const Counting: React.FC = () => {
  const Count = useAtomValue(countingState)
  return (
    <>
      <b>Counter value: {Count.value}</b> (watch +1 every 3 seconds)
    </>
  )
}

export default Counting
