module.exports = function(swig) {
  var show_pic = function (fileNames) {
//     var link_name;
//     if (typeof .title !== "undefined" & doc.title !== "") {
//       link_name = doc.title
//     } else {
//       link_name = "Page "+doc.url_name;
//     }
			return "<img src='/"+ fileNames +"' style='width: 100px; height: 100px;'>";
//     "<a href='/gallery/"+doc.url_name+"'>"+link_name+"</a>";
  }
  show_pic.safe = true;
  swig.setFilter('show_pic', show_pic);
};

