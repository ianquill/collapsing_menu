const menuController = (() => {
  const container = document.querySelector(".menu-container");
  const list = container.querySelector("ul");
  const items = list.querySelectorAll("li");
  const dropdown = document.createElement("input");

  let totalWidth = 0;
  const gap = 30;
  const displayedItems = [];
  const hiddenItems = [];

  // console.log(leftoverItems);

  function makeVisible(array) {
    for (let i=0; i<array.length; i++) {
      array[i].classList.add('visible');
    }
  }

  function initialize() {
    for (let i=0; i<items.length; i++) {
      
      // initial margin
      if (i === 0) {
        totalWidth += gap;
      }

      totalWidth += items[i].clientWidth + gap;
  
      if (totalWidth <= list.clientWidth) {
        displayedItems.push(items[i]);
      } else {
        displayedItems.splice(i, 0, dropdown);           // make this line just effect the first time else is triggered
        hiddenItems.push(items[i]);
      }
    }

    makeVisible(displayedItems);
  }


  
  
  // function isOverflowed(element) {
  //   return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  // }

  // for (let i=0; i<items.length; i++) {
  //   items[i].classList.add('menu-item');
  //   if (isOverflowed(items[i])) {
  //     console.log('overflowed');
  //   } else console.log(isOverflowed(list));
  // }

  console.log("hello world");

  return { initialize };


})(); 



export default menuController;
