const SaveSideDishService = {
  sortMethod: (groups, foodId) => {    
    const carrier = [];
    const optionGroup = [];
    const options = groups.map(group => group.options);
    options.forEach(option => {      
      // if (!!option && option.constructor === Array) {
      if (option.length > 1) {
        option.forEach(subOption => {
          carrier.push(subOption.optionId);
          optionGroup.push({
            foodOptionPrice: subOption.optionPrice,
            foodOptionId: subOption.optionId,
          });
        });
      } else {      
        carrier.push(option[0].optionId);
        optionGroup.push({
          foodOptionPrice: option[0].optionPrice,
          foodOptionId: option[0].optionId,
        });
      }
    });    
    carrier.sort((a, b) => a - b);    
    const joinedCarrier = carrier.join('-');
    const finalItem = `${foodId}-${joinedCarrier}`;
    console.log(finalItem);
    return {
      finalItem,
      optionGroup,
    };
  },
};

export default SaveSideDishService;
