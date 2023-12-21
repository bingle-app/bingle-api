const get = (request, response) => {
  response.status(200).send('All good. Walk the bear.');
};

module.exports = {get};
