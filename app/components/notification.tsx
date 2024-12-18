'use client'

import React, { useState, useEffect } from 'react'
import { CheckCircle, X } from 'lucide-react'

interface SuccessNotificationProps {
  message: string
  duration?: number
  onClose: () => void
}

export default function SuccessNotification({ 
  message, 
  duration = 5000, 
  onClose 
}: SuccessNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    setShouldRender(true)
    const showTimer = setTimeout(() => setIsVisible(true), 100)
    const hideTimer = setTimeout(() => setIsVisible(false), duration)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [duration])

  useEffect(() => {
    if (!isVisible && shouldRender) {
      const closeTimer = setTimeout(() => {
        setShouldRender(false)
        onClose()
      }, 300) 

      return () => clearTimeout(closeTimer)
    }
  }, [isVisible, shouldRender, onClose])

  if (!shouldRender) return null

  return (
    <div 
      className={`fixed top-4 right-4 w-full max-w-sm bg-white border border-green-200 rounded-lg shadow-lg overflow-hidden transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="p-4 flex items-center">
        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
        <div className="flex-grow">
          <h3 className="text-sm font-medium text-gray-900">Success</h3>
          <p className="mt-1 text-sm text-gray-500">{message}</p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 flex-shrink-0 inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <span className="sr-only">Close</span>
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="h-1 bg-green-500 animate-[shrink_5s_linear]" />
    </div>
  )
}

