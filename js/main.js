var csi = new CSInterface(),
    extPath = decodeURI(CSInterface.prototype.getSystemPath(SystemPath.EXTENSION)),
    assetsPath = extPath+"/assets/";

function pathToBrushName(fullPath) {
  return fullPath.substring(fullPath.lastIndexOf('/')+1,fullPath.length).replace(/\.(?:jp(?:e?g|e|2)|gif|png|tiff?|bmp|psd|psb)/,'');
}

function addBrushButtons() {
    
    csi.evalScript('getPhotosCount("'+assetsPath+'", "My Brush Set 1")', function(res) {
        var files = res.split(',');
        for (var i = 0; i < files.length; i++) {
            var fullPath = decodeURI(files[i]);
            var brushName = pathToBrushName(fullPath);
            
            $('<input type="button" class="brushItem" style="background-image:url(' + files[i] + ')" data-name="' + brushName + '">').appendTo('#result');
            
        }
    });
}

addBrushButtons();



$(document).on("click", ".brushItem", function () {
    var b = $(this).attr("data-name");
    csi.evalScript('selectBrush("'+b+'")');
});



