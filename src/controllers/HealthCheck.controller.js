const HealthCheck = (req, res) => {
 res.status(200).send('Application is up and running');
}

module.exports = HealthCheck;