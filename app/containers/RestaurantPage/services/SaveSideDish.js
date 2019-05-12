const SaveSideDishService = {
  sortMethod: (groups, foodId) => {
    const carrier = [];
    const options = groups.map(group => group.options);
    options.forEach(option => {
      if (!!option && option.constructor === Array) {
        option.map(subOption => carrier.push(subOption));
      } else {
        carrier.push(option);
      }
    });
    carrier.sort((a, b) => a - b);
    const joinedCarrier = carrier.join('-');
    const finalItem = `${foodId}-${joinedCarrier}`;
    return finalItem;
  },
};

export default SaveSideDishService;