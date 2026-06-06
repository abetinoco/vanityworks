import { Fragment } from 'react'

/**
 * Renders text where each letter has the title-letter hover animation, but
 * line breaks are forced to happen between WORDS (never inside a word).
 *
 * Each word is wrapped in an inline-block with whitespace-nowrap so its
 * letters can never wrap mid-word; spaces between words are real text nodes
 * so the browser can break the line there naturally.
 */
export function SplitLetters({ text }: { text: string }) {
  const tokens = text.split(/(\s+)/)
  return (
    <>
      {tokens.map((token, ti) => {
        if (token.length === 0) return null
        if (/^\s+$/.test(token)) {
          return <Fragment key={ti}>{token}</Fragment>
        }
        return (
          <span key={ti} className="inline-block whitespace-nowrap">
            {Array.from(token).map((ch, ci) => (
              <span key={ci} data-hover className="title-letter">
                {ch}
              </span>
            ))}
          </span>
        )
      })}
    </>
  )
}
