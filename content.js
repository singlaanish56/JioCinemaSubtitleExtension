

let observer = new MutationObserver(function(mutations) {
    const firstSpan = document.getElementsByClassName("shaka-text-region")
    if (firstSpan.length > 0) {
      //console.log(firstSpan)
      const secondSpan = firstSpan[0]
     // console.log(secondSpan)
      let spanInFirstContainer = secondSpan.querySelector('span');
      if (spanInFirstContainer) {
       //console.log(spanInFirstContainer)

        const lastSpans = spanInFirstContainer.querySelectorAll('span')
        console.log(lastSpans)
        if(lastSpans.length > 0)
        {
          for(let lastSpan of lastSpans)
            {
                if(lastSpan.innerHTML == lastSpan.innerText)
                {
                  console.log(lastSpan.style);
                  lastSpan.style.cssText = "background-color:transparent; color: white !important; font-size: 50px !important; font-weight: 700 !important; font-style: medium !important;";
                }
              
  
            }
        }
      }
    }
  });
  
  // Configuration of the observer:
  let config = { childList: true, subtree: true };
  
  // Pass in the target node, as well as the observer options
  observer.observe(document.body, config);