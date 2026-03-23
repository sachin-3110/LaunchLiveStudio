'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface WhatsAppFloatProps {
  phoneNumber: string
  message?: string
  popupTitle?: string
  popupDescription?: string
}

export function WhatsAppFloat({
  phoneNumber,
  message = "Have questions? Chat with us on WhatsApp!",
  popupTitle = "Let's Chat",
  popupDescription = "Message us directly on WhatsApp for instant support."
}: WhatsAppFloatProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleStartChat = () => {
    const encodedMessage = encodeURIComponent("Hi, I'm interested in learning more!")
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-2xl transition-smooth animate-scale-in flex items-center justify-center group"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      {/* Popup Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-smooth"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 animate-slide-up">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 w-80 space-y-4 border border-gray-200 dark:border-slate-800">
            {/* Header */}
            <div className="flex justify-between items-start gap-2">
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-foreground">{popupTitle}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{popupDescription}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-smooth flex-shrink-0 mt-1"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message */}
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {message}
            </p>

            {/* Start Chat Button */}
            <button
              onClick={handleStartChat}
              className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg transition-smooth flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Chat
            </button>
          </div>
        </div>
      )}
    </>
  )
}
