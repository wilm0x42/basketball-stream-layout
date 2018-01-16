'use strict';

module.exports = function (nodecg)
{
	var homeName;
	var awayName;

	nodecg.listenFor('updateHomeName', (value) =>
	{
    	homeName = value;
	});
	nodecg.listenFor('updateAwayName', (value) =>
	{
    	awayName = value;
	});

	nodecg.listenFor('getTeamNames', (error, ack) =>
	{
		ack(null, homeName, awayName);
	});
};
