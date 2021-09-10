import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time className="font-semibold" dateTime={dateString}>{format(date, 'd	LLLL yyyy')}</time>
}
