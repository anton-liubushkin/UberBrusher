function cTID(s) { return app.charIDToTypeID(s); };
function sTID(s) { return app.stringIDToTypeID(s); };

function getPhotosCount(assetsPath, g) {
    try {
        var folder = new Folder(assetsPath + g + "/");
        var files = folder.getFiles(/\.(jpg|tif|psd|bmp|gif|png|jpeg)$/i);
        return files;
    } catch(e){
        alert(e.line + '\n' + e);
    }
}

function selectBrush(brushName) {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putName( cTID("Brsh"), brushName);
    desc.putReference( cTID("null"), ref );
    executeAction( cTID("slct"), desc, DialogModes.NO );
};

//selectBrush(fileNameToBrushName("Chalk 60 pixels.png"));
//selectBrush(fileNameToBrushName("My Awesome Brush.gif"));