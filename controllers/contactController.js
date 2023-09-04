const Email = require("../utils/email");

exports.sendContact = async (req, res) => {
  try {
    const information = req.body;

    await new Email(information).sendContact();

    res.status(200).json({
      status: "Success",
      data: {
        information,
      },
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      status: "Failed",
      err: {
        error,
      },
    });
  }
};

exports.sendConnect = async (req, res) => {
  try {
    const information = req.body;

    console.log(information);

    await new Email(information).sendConnect();

    res.status(200).json({
      status: "Success",
      data: {
        information,
      },
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      status: "Failed",
      err: {
        error,
      },
    });
  }
};
