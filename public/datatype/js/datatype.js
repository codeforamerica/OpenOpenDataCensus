var opts = {
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var target = document.getElementById('spinner-container')
var spinner = new Spinner(opts).spin(target);

$(document).ready(function() {
    Tabletop.init({
        key: "1OhVbryeHBsPjJ3TjjVFlfM552pDKRjiUpTAXQJe9miA",
        callback: showInfo,
        parseNumbers: true
    });
});

var allRows = [];


function showInfo(data, tabletop) {
    allRows = _.sortBy(tabletop.sheets("Census Data").all(), "State");
    filterByDatatype(pageType);
}


function filterByDatatype(datatype) {
    clearCards();
    updateCards(allRows, [buildDatatypeFilter(datatype)]);
}


function clearCards() {
    $("#cards").empty();
}

function buildDatatypeFilter(datatype) {
    if (!datatype) {
        return false;
    }
    return function(row) {
        return row["Type of Data"] === datatype;
    }
}


function updateCards(rows, filters) {

    spinner.stop();
    
    var filters = filters || [];
    var source = $("#card-template").html();
    var template = Handlebars.compile(source);

    _.chain(rows)
        .filter(function(row) {
            return _.all(filters, function(filter) {
                return filter(row);
            });
        }).map(function(row) {
          
           row.exists = row["Exists"];
           row.digitized = row["Digitized"];
           row.online = row["Online"];
           row.isPublic = row["Public"];
           row.free = row["Free"];
           row.machine = row["Machine readable"];
           row.bulk = row["Available in bulk"];
           row.openLicense = row["No restrictions"];
           row.fresh = row["Up-to-date"];
           row.inRepo = row["In the state repository"];
           row.verifiable = row["Verifiable"];
           row.complete = row["Complete"];

           row.existsCaption = captions.exists[row.exists];
           row.digitizedCaption = captions.digitized[row.digitized];
           row.isPublicCaption = captions.isPublic[row.isPublic];
           row.freeCaption = captions.free[row.free];
           row.onlineCaption = captions.online[row.online];
           row.machineCaption = captions.machine[row.machine];
           row.bulkCaption = captions.bulk[row.bulk];
           row.openLicenseCaption = captions.openLicense[row.openLicense];
           row.freshCaption = captions.fresh[row.fresh];
           row.inRepoCaption = captions.inRepo[row.inRepo];
           row.verifiableCaption = captions.verifiable[row.verifiable];
           row.completeCaption = captions.complete[row.complete];

            var html = template(row);
            $("#cards").append(html);
            $('[data-toggle="tooltip"]').tooltip(); 
        });
}
