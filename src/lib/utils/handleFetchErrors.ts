import { CODE_ERRORS } from '@/config/errors'

export const handleFetchErrors = ({ code }): string => {
  // eslint-disable-next-line no-unused-expressions
  return CODE_ERRORS[code]
}
