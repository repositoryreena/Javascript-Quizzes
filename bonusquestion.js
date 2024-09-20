function debounce(func, timeout = 500) {
    let timer;
    return function (...args)  {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  function fetchResults() {
    console.log("Fetching input suggestions");
  }
  const processChange = debounce(() => fetchResults());