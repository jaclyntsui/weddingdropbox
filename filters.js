module.exports = function(swig) {
  var show_pic = function (fileNames) {
//     var link_name;
//     if (typeof .title !== "undefined" & doc.title !== "") {
//       link_name = doc.title
//     } else {
//       link_name = "Page "+doc.url_name;
//     }
			return "<img src='/"+ fileNames +"' style='width: 300px; height: 200px; padding: 8px; border: solid 1px #B5D6CD; box-shadow: 1px 1px 5px #999'>";

  }
  show_pic.safe = true;
  swig.setFilter('show_pic', show_pic);
};

