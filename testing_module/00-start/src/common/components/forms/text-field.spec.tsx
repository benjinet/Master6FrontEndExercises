import * as React from 'react';
import {render } from "@testing-library/react";
import { TextField } from "./text-field";


describe ('common/forms specs', ()=>{
  describe('initial test', () => {
    it('should return valid value', () =>{
      // arrange
      const props = {
          input: {
            'data-testid': 'dataTestID',
             name: 'test name',
             value: 'test value',
             onChange:  () => { },
             onBlur: () => { },
             onFocus: () => {},
          },
          meta: {
            active: true,
          }

           };

      // act
      const { getByTestId } = render ( <TextField {...props} />);

      // assert
      const element = getByTestId('dataTestID') as HTMLInputElement;

      expect(element.hasAttribute('name')).toBeTruthy();
      expect(element.name).toEqual(props.input.name);
      expect(element.value).toEqual(props.input.value);
    });

    it('meta submiterror, should return error', () =>{
      // arrange
      const props = {
          input: {
             name: 'test name',
             value: 'test value',
             onChange:  () => { },
             onBlur: () => { },
             onFocus: () => {},
          },
          meta: {
            error: "error test",
            submitError: true,
            touched: true,
          },

           };

      // act
      const {  getByText } = render ( <TextField {...props} />);

      // assert
      const mainElement = getByText('error test') as HTMLParagraphElement;

      expect(mainElement.textContent).toEqual(props.meta.error);
    });

    it('meta dirtySinceLastSubmit false, should return error', () =>{
      // arrange
      const props = {
          input: {
             name: 'test name',
             value: 'test value',
             onChange:  () => { },
             onBlur: () => { },
             onFocus: () => {},
          },
          meta: {
            error: "error test (dirtySinceLastSubmit)",
            dirtySinceLastSubmit: false,
            touched: true,
          },
           };

      // act
      const {getByText } = render ( <TextField {...props} />);

      // assert
      const mainElement = getByText(props.meta.error) as HTMLParagraphElement;

      expect(mainElement.textContent).toEqual(props.meta.error);
    });

    it('meta touched false, should return value', () =>{
      // arrange
      const props = {
          input: {
            'data-testid': 'dataInputTestID',
             name: 'test name',
             value: 'test value',
             onChange:  () => { },
             onBlur: () => { },
             onFocus: () => {},
          },
          meta: {
            error: "error test (dirtySinceLastSubmit)",
            dirtySinceLastSubmit: false,
            touched: false,
          },
           };

      // act
      const { getByTestId } = render ( <TextField {...props} />);

      // assert
      const element = getByTestId('dataInputTestID') as HTMLInputElement;

      expect(element.hasAttribute('name')).toBeTruthy();
      expect(element.name).toEqual(props.input.name);
      expect(element.value).toEqual(props.input.value);
    });
  });
});
