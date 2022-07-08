import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';
import { StateOption, stateOptions } from './opcoes';

const filterColors = (inputValue: string) => {
  return stateOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: string) =>
  new Promise<StateOption[]>((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class WithPromises extends Component {
  render() {
    return (
      <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
    );
  }
}


{/* https://codesandbox.io/s/react-slick-product-carousel-mobxn?file=/src/product.js
https://codesandbox.io/s/e-commerce-task-xux3d?file=/src/App.js:749-758

*/}
