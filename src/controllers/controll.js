//  we are ready to export. controllers main job is to controll the flow

exports.renderHomePage = (req, res) => {
  res.render("index"); //we want to render index view
};

exports.renderAboutPage = (req, res) => {
  res.render("about"); //we want to render index view
};
