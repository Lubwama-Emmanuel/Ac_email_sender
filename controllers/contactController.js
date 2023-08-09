const Email = require("../utils/email");

exports.sendContact = async (req, res) => {
  try {
    const information = req.body;

    await new Email(information).sendContact();

    console.log(information);

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
