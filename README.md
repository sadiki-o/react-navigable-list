# React Full Year Scheduler

React Navigable List is an open-source project aimed at providing a simple, customizable, and easy-to-use list component with advanced navigation features for individuals and organizations. The project was created out of a need for a more flexible and accessible list tool that can be used for various purposes, such as displaying data, managing selections, and providing enhanced keyboard navigation.

![image description](/preview.png)

The primary goal of this project is to create a comprehensive navigable list that can be easily customized and seamlessly integrated into any website or web application. I strongly believe that an outstanding list component should be user-friendly and highly adaptable, enabling users to personalize it to their unique requirements.

## Features

-  Simple and intuitive navigation

-  Multiple selection with checkboxes

-  Customizable styling and layout

-  Keyboard navigation support

-  Lightweight and performant with optional virtualization

## Installation

To install the React Full Year Scheduler , run the following command:

```bash

npm i add react-navigable-list 
yarn add add react-navigable-list

```




## Usage

To use this component in your React application, import the ReactNavigableList component from the appropriate file, and pass it the required props. Here is an example of how you can use this component:

```jsx

import { useState } from "react";
import { ReactFullYearScheduler, TEvent } from "react-full-year-scheduler";
import dayjs from "dayjs";

const App = () => {
  const items: any = [];

  for (let i = 1; i <= 10_000; i++) {
    items.push({
      label: `option ${i}`,
      value: `option_${i}`
    });
  }

  return (
   <div className="flex h-[220px] w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]">
        <ReactNavigableList
          items={items}
          disabled={disabled}
          listItemStyles={{
            focusedClasses: 'bg-purple-500 text-white',
            disabledClasses: 'text-[#C7C8CC]',
            selectedClasses: 'bg-purple-300 text-white'
          }}
          multiple={true}
          checkboxOnMultiple={true}
          onChange={selected => {
            console.log(selected);
          }}
          maxSelection={2}
        />
    </div>
  );
};

export default App;

```

## Options

| Property Name                  | Type       | Default      | Description                                                                                         |
| ------------------------------ | ---------- | ------------ | --------------------------------------------------------------------------------------------------- |
| `className`                    | `string`   | -            | Class name for the list.                                                                   |
| `listItemStyles`               | `object`   | -            | Styling/classes of the items/rows depending on their state (selected, disabled, focused).           |
| `items`                        | `object[]` | `[]`         | List of items/rows to be fed to the component. Each item should have a `label` and `value` field.   |
| `selected`                     | `number[]` | `[]`         | List of selected indexes.                                                                           |
| `disabled`                     | `number[]` | `[]`         | List of disabled indexes.                                                                           |
| `maxSelection`                 | `number`   | `undefined`  | Limit the maximum selected items when multiple selection is enabled.                                |
| `focusedIndex`                 | `number`   | `0`          | Default focused/hovered index.                                                                      |
| `multiple`                     | `boolean`  | `false`      | Enable multi-select or not.                                                                         |
| `checkboxOnMultiple`           | `boolean`  | `false`      | Enable checkboxes for multi-select.                                                                 |
| `keyboardEvents`               | `boolean`  | `false`      | Enable keyboard navigation/interactions.                                                            |
| `enableDragToScroll`           | `boolean`  | `true`       | Enable scrolling by dragging rows/items with the mouse.                                              |
| `overflowY`                    | `boolean`  | `false`      | Enable overflow if you want a scrollable list, else a normal list without scrolling.                |
| `onMouseLeaveResetFocusedIndex` | `boolean`  | `false`      | Reset focused index to undefined on mouse leave.                                                     |
| `onChange`                     | `function` | -            | Callback function triggered when selected indexes change.                                             |
| `onScroll`                     | `function` | -            | Callback function to keep track of the scroll position.                                              |
| `enableVirtualization`         | `boolean`  | `false`      | Enable virtualization for better performance with large lists.                                       |
| `itemHeight`                   | `number`   | `20`         | Height of each item row (required if virtualization is enabled).                                     |
| `windowHeight`                 | `number`   | `300`        | Height of the list window (required if virtualization is enabled).                                   |
| `overscan`                     | `number`   | `20`         | Number of extra items to render before and after the visible area/range when virtualization is enabled.|                                                |

## Events

| Event      | Arguments                                                                                                    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `onScroll` | `scrollEvent: UIEvent<HTMLDivElement \| HTMLUListElement>, isScrollEnd: boolean, isScrollStart: boolean`       | Triggered when the scroll position changes in the list component.                               |
| `onChange` | `selectedIndexes: number[] \| number \| undefined`                                                             | Callback function triggered when selected indexes in the list component change.                 |


## How to Contribute

We welcome contributions from anyone who is interested in helping to improve this project. Whether you're an experienced developer or just getting started with open source, there are many ways to contribute:

-   **Submit issues and bug reports.** If you encounter a problem with the calendar or have a suggestion for improvement, please let us know by submitting an issue on GitHub.

-   **Propose new ideas and features.** We're always looking for new ideas and ways to improve the calendar. If you have an idea for a new feature or improvement, please let us know by submitting an issue on GitHub.

-   **Contribute code.** If you're a developer and would like to contribute code to the project, please fork the repository, make your changes, and submit a pull request.

-   **Spread the word.** Help us spread the word about the project by sharing it with your friends and colleagues or writing about it on your blog or social media.

We appreciate all contributions and look forward to working with you to make this project the best it can be!

## Testing the app

Inside ```src/``` there is a folder called demo which you can use to test the component and play arround with it. all you have to do is run ```npm run dev``` to launch the dev server after running ```npm install``` .

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) for details.
