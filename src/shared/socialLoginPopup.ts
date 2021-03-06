interface WindowArea {
  width: number;
  height: number;
  left: number;
  top: number;
}

function calculateCorrectWindowArea(): WindowArea {
  const windowArea: WindowArea = {
    width: Math.floor(window.outerWidth * 0.8),
    height: Math.floor(window.outerHeight * 0.5),
    left: 0,
    top: 0
  };
  if (windowArea.width < 1000) {
    windowArea.width = 1000;
  }
  if (windowArea.height < 630) {
    windowArea.height = 630;
  }
  windowArea.left = Math.floor(
    window.screenX + (window.outerWidth - windowArea.width) / 2
  );
  windowArea.top = Math.floor(
    window.screenY + (window.outerHeight - windowArea.height) / 8
  );
  return windowArea;
}

function isFromPartyPlanner(event: MessageEvent) {
  return event.data && event.data.meta && event.data.meta == 'party_planner';
}

export const socialLoginPopup = <ReturnDataType>(
  myUrl: string
): Promise<ReturnDataType> => {
  const calculatedWindowArea = calculateCorrectWindowArea();
  const sep = myUrl.indexOf('?') !== -1 ? '&' : '?';
  const url = `${myUrl}${sep}`;
  const windowOpts = `toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0,
      width=${calculatedWindowArea.width},height=${calculatedWindowArea.height},
      left=${calculatedWindowArea.left},top=${calculatedWindowArea.top}`;
  const authWindow = window.open(url, '_blank', windowOpts);
  // Create IE + others compatible event handler

  const eventMethod = window.addEventListener
    ? 'addEventListener'
    : 'attachEvent';
  const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
  const eventer = (window as any)[eventMethod];

  const authorizationPromise = new Promise<ReturnDataType>(
    (resolve, reject) => {
      // some chrome extensions seem to be interfering here, weird stuff
      eventer(messageEvent, (event: MessageEvent) => {
        if (!authWindow) {
          return reject('Window not present');
        }
        if (event.origin !== process.env.NEXT_PUBLIC_FRONTEND_URL) {
          authWindow.close();
          return reject(
            `Origin not allowed! originated from ${event.origin}; checked with ${process.env.NEXT_PUBLIC_FRONTEND_URL}`
          );
        }
        if (event.data === 'close') {
          authWindow.close();
          return reject('Window closed');
        } else if (event.data !== 'close' && isFromPartyPlanner(event)) {
          authWindow.close();
          return resolve(event.data.payload);
        }
      });
    }
  );

  return authorizationPromise;
};

export default socialLoginPopup;
