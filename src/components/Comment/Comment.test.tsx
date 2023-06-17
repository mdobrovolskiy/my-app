import Comment from './Comment'
import { render, screen } from '@testing-library/react'

describe('CommentItem component', () => {
  it('Component renders', () => {
    expect(<Comment />).toBeTruthy()
  })
})
