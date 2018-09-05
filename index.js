'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var fillCalendar = function fillCalendar(month, year) {
  if (typeof month !== "number" || typeof year !== "number") {
    throw new Error("fillCalendar only accepts parameters of Type Number");
  }
  if (month < 0 || month > 11) {
    throw new Error("Invalid month index: Try [0-11]");
  }
  var datesArray = [];
  var monthStart = new Date(year, month, 1).getDay();
  var yearType = false;
  var filledNodes = 0;
  // Check for leap year
  year % 4 === 0 ? year % 100 === 0 ? year % 400 ? yearType = true : yearType = false : yearType = true : yearType = false;
  var monthArrays = yearType ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 0) {
    month = 12;
  }
  var leadDayStart = monthArrays[month - 1] - monthStart + 1;
  // Loop out lead date numbers
  for (var i = 0; i < monthStart; i++) {
    datesArray.push({ date: leadDayStart, type: "leadDate", id: "leadDate" + i });
    leadDayStart++;
    filledNodes++;
  }
  if (month === 12) {
    month = 0;
  }
  // Loop out month's date numbers
  for (var _i = 0; _i < monthArrays[month]; _i++) {
    datesArray.push({ date: _i + 1, type: "monthDate", id: "monthDate" + _i });
    filledNodes++;
  }
  // fill the empty remaining cells in the calendar
  var remainingNodes = 42 - filledNodes;
  for (var _i2 = 0; _i2 < remainingNodes; _i2++) {
    datesArray.push({ date: _i2 + 1, type: "postDate", id: "postDate" + _i2 });
  }
  return datesArray;
};

var route = function route(number, boolean) {
  if (boolean) {
    switch (number) {
      case 1:
        return 4;
      case 2:
        return 3;
      case 3:
        return 2;
      case 4:
        return 1;
      default:
        return number + 1;
    }
  }
  return number + 1;
};

function ArrowBtn(props) {
  return React__default.createElement(
    "div",
    { id: props.id, onClick: props.eventHandler, style: { background: props.colors.arrowsBG } },
    React__default.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", id: "arrowBtn", viewBox: "0 0 6.3 4", style: { fill: props.colors.svgFill } },
      React__default.createElement(
        "g",
        { id: "Layer_2", "data-name": "Layer 2" },
        React__default.createElement("polygon", { points: "0 1.5 5 1.5 4 0 5 0 6.3 2 5 4 4 4 5 2.5 0 2.5 0 1.5" })
      )
    )
  );
}

function DateNodes(props) {
  var cDate = new Date();
  var dateNodes = props.datesArray.map(function (date) {
    if (date.type === "leadDate") {
      return React__default.createElement(
        "div",
        {
          className: "dateNode",
          key: date.id,
          style: { background: props.colors.prevMonthNodesBG }
        },
        React__default.createElement(
          "span",
          null,
          date.date
        )
      );
    }
    if (date.date === cDate.getDate() && props.monthIsOffset !== true && date.type === "monthDate") {
      return React__default.createElement(
        "div",
        {
          className: "dateNode",
          key: date.id,
          style: { background: props.colors.currentDateNodeBG }
        },
        React__default.createElement(
          "span",
          null,
          date.date
        )
      );
    }
    if (date.type === "postDate") {
      return React__default.createElement(
        "div",
        {
          className: "dateNode",
          key: date.id,
          style: { background: props.colors.nextMonthNodesBG }
        },
        React__default.createElement(
          "span",
          null,
          date.date
        )
      );
    }
    return React__default.createElement(
      "div",
      {
        className: "dateNode",
        key: date.id,
        style: { background: props.colors.currentMonthNodesBG }
      },
      React__default.createElement(
        "span",
        null,
        date.date
      )
    );
  });
  return React__default.createElement(
    "div",
    { className: "d-numbers" },
    dateNodes
  );
}

function TextWindow(props) {
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      "div",
      { className: "c-header", style: { background: props.header1BG } },
      React__default.createElement(
        "span",
        null,
        new Date().toDateString()
      )
    ),
    React__default.createElement(
      "div",
      { className: "c-header2", style: { background: props.header2BG } },
      React__default.createElement(
        "div",
        { className: "container-3d" },
        React__default.createElement(
          "div",
          { className: "box-3d", style: { transform: "rotateY(" + props.rotateY + "deg)" } },
          React__default.createElement(
            "div",
            { id: "front", style: { background: props.header2BG } },
            props.monthGroup[0]
          ),
          React__default.createElement(
            "div",
            { id: "right", style: { background: props.header2BG } },
            props.monthGroup[1]
          ),
          React__default.createElement(
            "div",
            { id: "back", style: { background: props.header2BG } },
            props.monthGroup[2]
          ),
          React__default.createElement(
            "div",
            { id: "left", style: { background: props.header2BG } },
            props.monthGroup[3]
          )
        )
      )
    )
  );
}

function WeekDayNodes(props) {
  var weekDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var weekDayNodes = weekDayNames.map(function (node) {
    return React__default.createElement(
      "div",
      { style: { borderRight: "2px solid" + props.border } },
      React__default.createElement(
        "span",
        null,
        node
      )
    );
  });
  return weekDayNodes;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var monthNames = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ", "Jul ", "Aug ", "Sept ", "Oct ", "Nov ", "Dec "];

var Calendar = function (_Component) {
  inherits(Calendar, _Component);

  function Calendar(props) {
    classCallCheck(this, Calendar);

    var _this = possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.state = {
      monthIsOffset: false,
      monthOffset: props.date.getMonth(),
      yearOffset: props.date.getFullYear(),
      datesArray: fillCalendar(props.date.getMonth(), props.date.getFullYear()),
      rotateY: 0,
      itorator: 0,
      rightBtn: false,
      leftBtn: false,
      monthGroup: [monthNames[props.date.getMonth()] + props.date.getFullYear(), undefined, undefined, undefined]
    };
    _this.handleMonthChange = _this.handleMonthChange.bind(_this);
    return _this;
  }

  createClass(Calendar, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _state = this.state,
          yearOffset = _state.yearOffset,
          monthOffset = _state.monthOffset;

      if (this.state.monthOffset !== prevState.monthOffset) {
        this.setState({ datesArray: fillCalendar(monthOffset, yearOffset) });
      }
    }
  }, {
    key: 'handleMonthChange',
    value: function handleMonthChange(e) {
      var _this2 = this;

      var _state2 = this.state,
          monthOffset = _state2.monthOffset,
          yearOffset = _state2.yearOffset,
          rotateY = _state2.rotateY,
          itorator = _state2.itorator,
          rightBtn = _state2.rightBtn,
          leftBtn = _state2.leftBtn;

      var cMonth = this.props.date.getMonth();
      var cYear = this.props.date.getFullYear();
      var nextMonthValues = {
        nextYear: {
          monthOffset: 0,
          yearOffset: yearOffset + 1,
          rotateY: rotateY - 90,
          itorator: route(itorator, leftBtn)
        },
        currentYear: {
          monthOffset: monthOffset + 1,
          rotateY: rotateY - 90,
          itorator: route(itorator, leftBtn)
        }
      };
      var prevMonthValues = {
        prevYear: {
          monthOffset: 11,
          yearOffset: yearOffset - 1,
          rotateY: rotateY + 90,
          itorator: route(itorator, rightBtn)
        },
        currentYear: {
          monthOffset: monthOffset - 1,
          rotateY: rotateY + 90,
          itorator: route(itorator, rightBtn)
        }
      };
      if (e.currentTarget.id === "right-arrow") {
        this.setState(monthOffset === 11 ? nextMonthValues.nextYear : nextMonthValues.currentYear, function () {
          var _state3 = _this2.state,
              monthOffset = _state3.monthOffset,
              yearOffset = _state3.yearOffset,
              itorator = _state3.itorator;

          _this2.setState({ monthIsOffset: monthOffset === cMonth && yearOffset === cYear ? false : true });
          _this2.setState({ rightBtn: true, leftBtn: false });
          _this2.setState(itorator === 1 ? function (prevState) {
            return { monthGroup: [prevState.monthGroup[0], monthNames[monthOffset] + yearOffset, undefined, undefined] };
          } : itorator === 2 ? function (prevState) {
            return { monthGroup: [undefined, prevState.monthGroup[1], monthNames[monthOffset] + yearOffset, undefined] };
          } : itorator === 3 ? function (prevState) {
            return { monthGroup: [undefined, undefined, prevState.monthGroup[2], monthNames[monthOffset] + yearOffset] };
          } : itorator === 4 ? function (prevState) {
            return { monthGroup: [monthNames[monthOffset] + yearOffset, undefined, undefined, prevState.monthGroup[3]], itorator: 0 };
          } : void 0);
        });
      } else {
        this.setState(monthOffset === 0 ? prevMonthValues.prevYear : prevMonthValues.currentYear, function () {
          var _state4 = _this2.state,
              monthOffset = _state4.monthOffset,
              yearOffset = _state4.yearOffset,
              itorator = _state4.itorator;

          _this2.setState({ monthIsOffset: monthOffset === cMonth && yearOffset === cYear ? false : true });
          _this2.setState({ rightBtn: false, leftBtn: true });
          _this2.setState(itorator === 1 ? function (prevState) {
            return { monthGroup: [prevState.monthGroup[0], undefined, undefined, monthNames[monthOffset] + yearOffset] };
          } : itorator === 2 ? function (prevState) {
            return { monthGroup: [undefined, undefined, monthNames[monthOffset] + yearOffset, prevState.monthGroup[3]] };
          } : itorator === 3 ? function (prevState) {
            return { monthGroup: [undefined, monthNames[monthOffset] + yearOffset, prevState.monthGroup[2], undefined] };
          } : itorator === 4 ? function (prevState) {
            return { monthGroup: [monthNames[monthOffset] + yearOffset, prevState.monthGroup[1], undefined, undefined], itorator: 0 };
          } : void 0);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state5 = this.state,
          datesArray = _state5.datesArray,
          monthIsOffset = _state5.monthIsOffset,
          rotateY = _state5.rotateY,
          monthGroup = _state5.monthGroup,
          monthOffset = _state5.monthOffset;
      var _props = this.props,
          date = _props.date,
          monthNames = _props.monthNames,
          colors = _props.colors;

      return React__default.createElement(
        'div',
        { className: 'calendar', style: { background: colors.componentBG, color: colors.textColor } },
        React__default.createElement(
          'div',
          { className: 'ui' },
          React__default.createElement(TextWindow, {
            monthGroup: monthGroup,
            rotateY: rotateY,
            monthOffset: monthOffset,
            cMonth: date.getMonth(),
            monthNames: monthNames,
            header1BG: colors.header1BG,
            header2BG: colors.header2BG
          }),
          React__default.createElement(
            'div',
            { className: 'arrow-btns' },
            React__default.createElement(ArrowBtn, { id: "left-arrow", eventHandler: this.handleMonthChange, colors: { arrowsBG: colors.arrowsBG, svgFill: colors.textColor } }),
            React__default.createElement(ArrowBtn, { id: "right-arrow", eventHandler: this.handleMonthChange, colors: { arrowsBG: colors.arrowsBG, svgFill: colors.textColor } })
          )
        ),
        React__default.createElement(
          'div',
          { className: 'display' },
          React__default.createElement(
            'div',
            { className: 'd-wkDays', id: 'wkDays', style: { background: colors.weekDayNamesBG } },
            React__default.createElement(WeekDayNodes, { border: colors.componentBG })
          ),
          React__default.createElement(DateNodes, {
            datesArray: datesArray,
            monthIsOffset: monthIsOffset,
            colors: {
              prevMonthNodesBG: colors.prevMonthNodesBG,
              currentDateNodeBG: colors.currentDateNodeBG,
              currentMonthNodesBG: colors.currentMonthNodesBG,
              nextMonthNodesBG: colors.nextMonthNodesBG
            }
          })
        )
      );
    }
  }]);
  return Calendar;
}(React.Component);

var colorTheme = {
  redflat: {
    textColor: "#fff",
    componentBG: "#383737",
    header1BG: "#383737",
    header2BG: "#383737",
    arrowsBG: "#ff2b2b",
    weekDayNamesBG: "#c4c1c1",
    prevMonthNodesBG: "#ff2b2b",
    currentDateNodeBG: "#747272",
    currentMonthNodesBG: "#c4c1c1",
    nextMonthNodesBG: "#ff2b2b"
  },
  original: {
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
};

exports.default = Calendar;
exports.colorTheme = colorTheme;
//# sourceMappingURL=index.js.map
