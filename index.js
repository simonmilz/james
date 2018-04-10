const Bravia = require('bravia');
const Queue = require('bull');

require('dotenv').config();

const HomeAutomationQueue = new Queue(process.env.HOME_QUEUE_NAME, process.env.REDIS_URL);
const bravia = new Bravia(process.env.HOME_BRAVIA_IP, '80', process.env.HOME_BRAVIA_KEY);

HomeAutomationQueue.process(function(job, done){
	try {
		if ('tv' === job.data.result.parameters.device) {
			bravia.send(job.data.result.parameters.command);
		}
	} catch (e) {} finally {
		done();
	}
});