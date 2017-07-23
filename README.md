# crossfilterplus
Wrapper over crossfilter to manipulate data easily. It is developer friendly in nature.
**Crossfilterplus** is a npm module for exploring large multivariate datasets in the browser in a config driven manner. Since it is built over crossfilter, it could supports extremely fast (<30ms) interaction with coordinated views, even with datasets containing a million or more records

Want to learn more? [See the wiki.](https://github.com/fallacy321/crossfilterplus/wiki)
Have a look at [home page](https://fallacy321.github.io/crossfilterplus/) for insights 

## Status

Crossfilterplus is **under active development, please raise issues/ enhancements and merge requests**. We welcome genuine bug-fixes and PRs. The main developer and author associated with crossfilterplus is Heena Mahour at the moment.

A new [Crossfilterplus Organization](https://github.com/Crossfilterplus) has been created on Github.

### Development Environment

Clone the repo:
```sh
git clone https://github.com/Crossfilterplus/crossfilterplus.git
```

Move into that directory:
```sh
cd crossfilterplus
```

Install the dependencies:
```sh
npm install
```

### Using crossfilterplus npm module
```sh
npm install crossfilterplus
```

```sh
var crossfilterPlus = require('crossfilterplus')
```
# Getting Started

Given this data array:

```js
var data = [
  {date: "2011-11-14T16:17:54Z", quantity: 2, total: 190, tip: 100, type: "tab"},
  {date: "2011-11-14T16:20:19Z", quantity: 2, total: 190, tip: 100, type: "tab"},
  {date: "2011-11-14T16:28:54Z", quantity: 1, total: 300, tip: 200, type: "visa"},
  {date: "2011-11-14T16:30:43Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T16:48:46Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T16:53:41Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T16:54:06Z", quantity: 1, total: 100, tip: 0, type: "cash"},
  {date: "2011-11-14T16:58:03Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T17:07:21Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T17:22:59Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T17:25:45Z", quantity: 2, total: 200, tip: 0, type: "cash"},
  {date: "2011-11-14T17:29:52Z", quantity: 1, total: 200, tip: 100, type: "visa"}
]
```

A simple data manipulation (without config) could be achieved as follow:
```js
var crossfilterPlus = require('crossfilterplus')
crossfilterPlus.data(data) // initialise data
var manipulateData = crossfilterPlus
				   .dimension(['total','tip'])
				   .group()
				   .all()
```
A simple data manipulation (with config) could be achieved as follow:
( I am pretty sure you will go with this approach over first ? )
```js
var crossfilterPlus = require('crossfilterplus')
var config = {
  data: data,
  dimension: ['total','tip'],
  aggregate: 'sum',
  measure: 'tip'
}
crossfilterPlus.build(config)
```


## Future plans

- We need active contributors !!
- Make nested grouping config driven
- Config enhancements
- Integrate it with [d3plus](https://github.com/alexandersimoes/d3plus)
