// Back navigation button for the header bar of the app screens that are not the main screen

import React from 'react'

function BackButtonNavigation() {
  return (
    <div className=" items-center justify-between flex">
      <button className="p-2 rounded-md hover:bg-purple-300 hover:text-white text-purple-900" onClick={() => window.history.back()}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
    </div>
  )
}

export default BackButtonNavigation