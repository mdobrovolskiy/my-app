import { screen, render } from '@testing-library/react'
import ProfilePageContent from './ProfilePageContent'
import { useSelector } from 'react-redux'
import store from '../../redux/store'
import { Provider } from 'react-redux'

describe('component', () => {
  it('renders', () => {
    render(
      <Provider store={store}>
        <ProfilePageContent />
      </Provider>
    )
    expect(screen.getByText('Sign up')).toBeInTheDocument()
  })
})
