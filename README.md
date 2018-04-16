# redline13-selenium-example

An example selenium test using redline13's framework

## Running locally

- Checkout this repo
- `npm install`
- `$ node --version  ->  v8.9.4`
- `node run.js` gives output like:
```
h2 is as expected
Record Load Time for ...
...
(...lots more of those)
...
All done
```

Which is what I expect.

-------------

## Running on redline13

I would expect `run.js` to do the same thing locally as when uploaded
and run on redline13.

I tested this on redline13 with the following settings:

- Custom test
- Custom file: run.js
- Number of users: 10
- Save Response output: yes
- Cloud options:
  - Ireland
  - 1 server
  - 10 users per server
  - t2.medium (on-demand)
  - default subnet in eu-west-1a
- Advanced test options:
  - Load agent language: node
  - Plugins:
    - Node version manager:
      - Node version: `8.*`
    - Webdriver nodejs
      - Browser: chrome

This test gave me 10/10 failed/pages.

The logs from this test looks something like:
```

```