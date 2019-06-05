import * as type from '../type'

export default interface Location {
  path: string
  url?: string
  params?: type.data
  query?: type.data
}