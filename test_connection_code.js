log.info("Begin DB2 testConnection code.");
var startTime = env.System.nanoTime();
var locationName = settings && settings.locationName;
var hostname = settings && settings.hostname;
var username = settings && settings.username;
var schema = settings && settings.schema;
var password = settings && settings.password;
var port = settings && settings.port;
var url = env.jdbcInfo + "//" + hostname + ":" + port + "/" + locationName + ":currentSchema=" + schema + ";";

if (log.isFinestEnabled()) {
	log.finest("DB2 - testConnection url " + url + " username:" + username);
}
try {
	if (env.sqlSelectTest) {
		var sql = env.sqlSelectTest;
		if (log.isFinestEnabled()) {
			log.finest("DB2 - Test sql " + sql);
		}
		var connection = env.DriverManager.getConnection(url, username, password);
		var stmt = connection.createStatement();
		var rs = stmt.executeQuery(sql);
		if (rs.next()) {
			log.debug("DB2 - Test Select " + rs.getObject(1));
		}
		rs.close();
		stmt.close()
		connection.close();
	}
}
catch (e) {
	var result = {};
	log.error("DB2 - Error thrown during testConnection:" + e.message);
	result.status = "NOT OK";
	result.message = e.message;
	return result;
}

var endTime = env.System.nanoTime();
var latencyInMillis = (endTime - startTime) / 100000000;
var resultObj = {
	status: "OK",
	latency: latencyInMillis
};

if (log.isDebugEnabled()) {
	log.debug("DB2 - Returned result: " + resultObj);
}
log.info("End DB2 testConnection code");
return resultObj;
