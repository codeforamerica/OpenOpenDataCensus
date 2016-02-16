# Overview

Open Open Data Census is an open source platform for conducting open data censuses and publishing their results. It was created as a bespoke platform for [CFA's Police Open Data Census](https://codeforamerica.github.io/PoliceOpenDataCensus/), reused and adapted for [U.S. Open Data’s State Open Data Census](https://census.usopendata.org/), and here is being abstracted into a general-purpose platform for conducting open data censuses. This is meant to serve as a lightweight alternative to [Open Knowledge’s Open Data Census](https://github.com/okfn/opendatacensus), the pathbreaking platform in this space.

This is designed to run entirely on a local machine for development, and to be deployed in the form of its output, as static files (e.g., to GitHub Pages). It uses [Google Sheets](https://www.google.com/sheets/about/) as its data store, retrieving that data via [Tabletop.js](https://github.com/jsoma/tabletop). It’s built atop [Bower](http://bower.io/), [Gulp](http://gulpjs.com/), and [Node](https://nodejs.org/).

Deploying it right now would require a great deal of customization. For a developer, that would require a few hours of work, but for anybody else it would be an exercise in frustration. Contributors are in the process of abstracting this into a general-purpose platform.

# Deploying

```
git clone git@github.com:codeforamerica/OpenOpenDataCensus.git
cd OpenOpenDataCensus
npm install
npm install gulp -G
gulp readme
```

[A model Google Sheet is available](https://docs.google.com/spreadsheets/d/1OhVbryeHBsPjJ3TjjVFlfM552pDKRjiUpTAXQJe9miA/). Duplicate it into your own Google Docs account to serve as your data store.
