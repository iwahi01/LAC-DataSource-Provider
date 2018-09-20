log.info("Begin DB2 close code");
if (connection) {
	try {
		if (log.isFinestEnabled()) {
			log.finest("DB2 - Connection: " + connection);
		}
		connection.close();
	}
	catch (e) {
		log.error("DB2 - Close Connection Error " + e.message);
		throw e;
	}
}
log.info("End DB2 close code");
