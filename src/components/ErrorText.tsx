import React from 'react';

export interface IErrorTextProps {
  error: string
}

export const CreateUserErrorText: React.FunctionComponent<IErrorTextProps> = props => {
  const { error } = props

  if (error === '') return null

  return (
    <div>
      <small className='mb-4 dark:text-white'>
        {error}
      </small>
    </div>
  )
}

export const LoginErrorText: React.FunctionComponent<IErrorTextProps> = props => {
  const { error } = props

  if (error === '') return null

  return (
    <div>
      <small className='mb-4 dark:text-white'>
        {error}
      </small>
    </div>
  )
}