module.exports = function(layoutData, options) {
  // console.log(layoutData); // UI 模块结构组成和样式描述等
  const renderData = {};
  var rawJson = JSON.stringify(layoutData)+'';
  
  // console.log(renderData);
  renderData.layout = JSON.stringify(layoutData)+'';
  
  return {
    renderData: renderData,
    panelDisplay: [
      {
          panelName: 'renderData.layout',
          panelValue: renderData.layout,
          panelType: 'string'
      }
    ],
    noTemplate:true
  };
}
