import * as React from 'react';
import {render } from "@testing-library/react";
import { LoginComponent } from './login.component';


describe ('pods/login specs', ()=>{
  describe('login container', () => {
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
      const { } = render(<LoginComponent {...props} />);

      // Assert



      expect(true).toBe(true);
    });
  });
});
