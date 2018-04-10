const Bravia = require('bravia');
const Queue = require('bull');

require('dotenv').config();

const JamesQueue = new Queue(process.env.JAMES_QUEUE_NAME, process.env.JAMES_QUEUE_URI);
const bravia = new Bravia(process.env.SONY_BRAVIA_IP, '80', process.env.SONY_BRAVIA_KEY);

JamesQueue.process(function(job, done){
	try {
		if ('james.tv' === job.data.result.action) {
			bravia.send(job.data.result.parameters.command);
		}
	} catch (e) {} finally {
		done();
	}
});