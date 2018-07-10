import React from 'react'
import App from '../app/components/App'

describe('Name of the group', () => {
  it('should render without crashing', () => {
    const shallowRenderedApp = shallow(<App />)

    expect(shallowRenderedApp.find('div').length).toEqual(1)
    expect(shallowRenderedApp.find('p').length).toEqual(1)
    expect(shallowRenderedApp.find('header').length).toEqual(1)
  })
})
