import { Link } from 'react-router-dom'

export function GoBackLink() {
  return (
    <Link
      to="/"
      className="inline-block font-[family-name:var(--font-cabinet)] font-medium text-white transition-opacity hover:opacity-70"
      style={{ fontSize: '39.56px' }}
    >
      {'< Go Back'}
    </Link>
  )
}
