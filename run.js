const redline = require('redline13-webdriver');
const By = redline.webdriver.By
const until = redline.webdriver.until;
const Condition = redline.webdriver.Condition;

redline.webdriver.promise.USE_PROMISE_MANAGER = false;

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

const BROWSER = 'chrome';
const URL = 'https://www.redline13.com/blog/';

const waitForVisible = by => {
  return new Condition(
    'Waiting for ' + by,
    driver => {
      return driver
        .findElements(by)
        .then(elements => {
          if (elements.length === 0) {
            return false;
          }
          return elements[0].isDisplayed();
        })
    });
};


const main = () => {
  const driver = redline.loadBrowser(BROWSER);
  driver
    .get(URL)
    .then(_ => driver.findElement(By.css('h3 span'))
                     .then(h3 => h3.getText())
                     .then(h3text => {
                       if (h3text === '(Almost) Free Load Testing') {
                         console.log('h3 is as expected');
                       } else {
                         console.log('something went wrong');
                       }
                     }))
    .then(_ => driver.quit())
    .then(_ => console.log('All done'));
};

main();
