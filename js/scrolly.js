var viz, workbook, activeSheet;


var pageWidth = $('body').innerWidth();
var pageHeight = $('body').innerHeight();


function initializeViz() {
  var placeholderDiv = document.getElementById("tableauViz");
  var url = "http://public.tableausoftware.com/views/Education_6/FourYearGraduationRate";
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: false,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };

  viz = new tableauSoftware.Viz(placeholderDiv, url, options);
  /*viz.setFrameSize();*/
}  

$(initializeViz);