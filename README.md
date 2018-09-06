# colorful-calendar

[![npm version](https://badge.fury.io/js/colorful-calendar.svg)](https://badge.fury.io/js/colorful-calendar)

A simple calendar component for react applications

```jsx
import React, { Component } from 'react'
import Calendar, { colorTheme } from 'colorful-calendar'
import 'colorful-calendar/Calendar.css'
import 'colorful-calendar/mediaqueries.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar
          date={new Date()}
          colors={colorTheme.redflat}
        >
      <div>
    )
  }
}
```

### Install

#### Using npm

```
npm install colorful-calendar
```

## Required component properties

Properties | Type | Description
------------ | ------------- | -------------
date | Object | Provides the component with the date passed to it
colors | Object | Provides the component with the color theme chosen from calendar.colors.js

## Optional feature
Pass a custom colors object

```js
{
  textColor: "#000",
  componentBG: "#292828",
  header1BG: "#fff",
  header2BG: "#fff",
  arrowsBG: "#fff",
  weekDayNamesBG: "#fff",
  prevMonthNodesBG: "#8ee5ff",
  currentDateNodeBG: "#c4c1c1",
  currentMonthNodesBG: "#fff",
  nextMonthNodesBG: "#8ee5ff"
}
```
... or if you wish you can create a custom.colors.js file  
Note: you can name this file whatever you would like.

### custom.colors.js
```js
const myNewColorTheme = {
  textColor: "#000",
  componentBG: "#292828",
  header1BG: "#fff",
  header2BG: "#fff",
  arrowsBG: "#fff",
  weekDayNamesBG: "#fff",
  prevMonthNodesBG: "#8ee5ff",
  currentDateNodeBG: "#c4c1c1",
  currentMonthNodesBG: "#fff",
  nextMonthNodesBG: "#8ee5ff"
}

export { myNewColorTheme, ... , ... }
```
### App.js
```jsx
import React, { Component } from 'react'
import Calendar from 'colorful-calendar'
import { myNewColorTheme } from './custom.colors.js'
import 'colorful-calendar/Calendar.css'
import 'colorful-calendar/mediaqueries.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar
          date={new Date()}
          colors={myNewColorTheme}
        >
      <div>
    )
  }
}
```

## Color theme options

Color theme name |
---------- |
| original
| redflat

## Contribute

See development repository [here](https://github.com/ryansaam/colorful-calendar-dev)
