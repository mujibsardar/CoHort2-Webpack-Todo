const Category = (() => {

    const createNew = (title) => {
      console.log(`model/Category.createNew`);
      return {
        title: title,
      }
    }
    return {createNew}

})();

export  { Category };
