import './BackButton.css'

interface Props {
  onClick?: () => void
}

export function BackButton({ onClick }: Props) {
  const handleBack = () => {
    onClick?.()
  }

  return (
    <button onClick={handleBack} className="back-button">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
        <path
          d="M15 6L9 12L15 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
