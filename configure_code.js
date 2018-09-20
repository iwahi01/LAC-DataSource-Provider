log.info("Begin DB2 configure code");
//the get_config_idnfo_code.js defined the variable names below:
var locationName = settings && settings.locationName;
var hostname = settings && settings.hostname;
var username = settings && settings.username;
var schema = settings && settings.schema;
var password = settings && settings.password;
var port = settings && settings.port;
var url = env.jdbcInfo + "//" + hostname + ":" + port + "/" + locationName + ":currentSchema=" + schema + ";";

if (log.isFinestEnabled())
	log.finest("DB2 -  URL " + url);
var connection = env.DriverManager.getConnection(url, username, password);
connection.setAutoCommit(false); //required by LAC

log.info("End DB2 configure code");
return connection;
