import { useState, useEffect } from "react"
import {  getSetting} from "../../api"
export const Footer = () => {
  const [copyrigth, setCopyrigth] = useState('')

  const getCopyrigth =  async () => {
    const resp = await getSetting() 
    setCopyrigth( resp.acf.copyrigth)

  }
  useEffect(() => {
    getCopyrigth()
  }, [])

  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between py-8">
          <p className="text-white">
            {copyrigth}
            
          </p>
        </div>
      </div>
    </footer>
  )
}
