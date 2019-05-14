const SaveSideDishService = {
  sortMethod: (groups, foodId) => {
    const carrier = [];
    const optionGroup = [];
    const options = groups.map(group => group.options);
    options.forEach(option => {
      if (!!option && option.constructor === Array) {
        option.forEach(subOption => {
          carrier.push(subOption);
        });
      } else {
        carrier.push(option);
        optionGroup.foodOptionId = option;
      }
    });
    carrier.sort((a, b) => a - b);
    carrier.map(option => optionGroup.push({ foodOptionId: option }));
    const joinedCarrier = carrier.join('-');
    const finalItem = `${foodId}-${joinedCarrier}`;
    return {
      finalItem,
      optionGroup,
    };
  },
};

export default SaveSideDishService;
