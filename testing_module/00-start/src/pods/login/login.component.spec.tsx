import * as React from 'react';
import ReactDOM from 'react-dom';
import {render } from "@testing-library/react";
import {  act } from '@testing-library/react-hooks';
import { LoginComponent } from './login.component';
import { formValidation } from './login.validation';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe ('pods/login specs', ()=>{
  describe('login component', () => {
    it('should return true', () =>{
      // Arrange
      const props = {
        onLogin: ()=>{},
        initialLogin: {
          login: '',
          password: '',
        },
      };

      // Act
      //const { getByTestId } = render(<LoginComponent {...props} />);

      act( ()=>{
        ReactDOM.render(<LoginComponent {...props} />, container);
      });

      // Assert
      const button  = container.querySelector('button');

      act(() => {    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));  });

// console.info('element: ', element);

     // expect(element).toBeInTheDocument();
      //expect(element.name).toEqual('login');
    });
  });
});
