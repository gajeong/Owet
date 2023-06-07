import React from 'react'

export default function Button({
  text,
  onClick,
  outline,
  color,
  bg,
  width,
  textColor,
}) {
  return (
    <button
      className={`py-2 px-4 outline outline-1  mt-1 ${
        'text-' + textColor
      } text-xs ${'bg-' + bg} ${
        'outline-' + outline
      } ${width}
        hover:brightness-125
        hover:drop-shadow-m
        `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
