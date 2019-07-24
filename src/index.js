module.exports = function(layoutData, options) {

  const renderData = {};
  renderData.json = JSON.stringify(layoutData);
  
  return {
    renderData,
    prettierOpt: {},
    panelDisplay: [
      {
        panelName: 'component.json',
        panelValue: renderData.json,
        panelType: 'rawLayout',
        mode: 'javascript'
      }
    ],
    noTemplate:true
  };
}
