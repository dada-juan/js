function clickXPaths() {
  const xpaths = [
    '//*[@id="app"]/div[1]/div[1]/main/div/div/div[1]/div/div[3]/div[3]/div[3]/div/div[4]/img',
    '/html/body/div[*]/div/div[3]/button[2]'
    // 添加更多的 XPath，如果有的话
  ];

  let index = 0;

  function clickNextXPath() {
    if (index >= xpaths.length) {
      console.log('已完成所有的点击操作。');
      return;
    }

    const xpath = xpaths[index];
    const elements = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    const element = elements.iterateNext();

    if (element) {
      element.click();
      console.log(`已点击 XPath: ${xpath}`);

      setTimeout(() => {
        const buttonXPath = '/html/body/div[*]/div/div[3]/button[2]';
        const buttonElements = document.evaluate(buttonXPath, document, null, XPathResult.ANY_TYPE, null);
        const buttonElement = buttonElements.iterateNext();

        if (buttonElement) {
          buttonElement.click();
          console.log(`已点击按钮 XPath: ${buttonXPath}`);
        } else {
          console.log(`找不到按钮 XPath: ${buttonXPath}`);
        }

        setTimeout(clickNextXPath, 500); // 延迟 500 毫秒后点击下一个 XPath
      }, 500);
    } else {
      console.log(`找不到元素 XPath: ${xpath}`);
      index++; // 如果找不到元素，继续下一个 XPath
      clickNextXPath();
    }
  }

  clickNextXPath();
}

// 调用函数开始执行
clickXPaths();
