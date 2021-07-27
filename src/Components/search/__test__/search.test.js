import React from 'react';
import ReactDOM from 'react-dom'
import SearchComp from '../index'
import { isTSAnyKeyword } from '@babel/types';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

it('renders whole without crashing',()=>{
    const div = document.createElement("div")
    ReactDOM.render(<SearchComp></SearchComp>, div)
})
it('renders input field correctly', ()=>{
    const {getByTestId} = render(<SearchComp></SearchComp>)
    expect(getByTestId('inputBtn')).toHaveTextContent('')
})
it('matches snapshot',()=>{
    const tree = renderer.create(<SearchComp></SearchComp>)
    expect(tree).toMatchSnapshot();
})