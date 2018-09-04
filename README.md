# colorful-calendar <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

A simple calendar component for react applications

```jsx
import React, { Component } from 'react'
import Calendar from 'Calendar'
import { redflat } from 'calendar.colors'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar
          date={new Date()}
          colors={redflat}
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
... or if you wish you can modify the calendar.colors.js file

```js
const original = {
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

export { ..., original, ... }
```

## Color options

Color name |
---------- |
| original
| redflat


