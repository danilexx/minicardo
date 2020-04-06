/* eslint-disable consistent-return */
/* eslint-disable func-names */
// @ts-nocheck

function dataURItoBlob(URI?: string) {
  // eslint-disable-next-line func-names
  return new Promise(function(resolve, reject) {
    if (URI == null) return reject();
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const image = new Image();
    image.addEventListener(
      "load",
      function() {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(context.getImageData(0, 0, canvas.width, canvas.height));
      },
      false
    );
    image.src = URI;
  });
}

export default dataURItoBlob;
