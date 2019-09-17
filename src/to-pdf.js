function clickedFn () {
  const me = document.querySelector('#body-app')
  const myWindow = window.open("", "MsgWindow", "width=1440,height=1787");

  const alllink = document.getElementsByTagName('link');
  let csshref = '';
  for (var i = 0; i< alllink.length; i++) {
      const href = alllink[i].href;
      if (href && href.indexOf('dracula') > 0) {
          csshref = href;
      }
  }

  myWindow.document.write('<html><head><title>Print it!</title><link rel="stylesheet" type="text/css" href="' + csshref + '"></head><body>');
  myWindow.document.write(`${c}`);
  myWindow.document.write('</body></html>');
}

setTimeout (() => {
  document.querySelector("#test-btn").addEventListener("click", clickedFn);
}, 1000)