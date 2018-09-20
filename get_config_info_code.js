log.info("Begin DB2 getConfigInfo code");
var configInfo = {
	ui_config: [{
		display: "ホスト名",
		type: "string",
		length: 20,
		required: true,
		parameterName: "hostname",
		placeholder: "ホスト名を入力してください。",
		description: "ホスト名を入力してください。"
	}, {
		display: "ポート番号",
		type: "number",
		length: 5,
		required: true,
		parameterName: "port",
		placeholder: "ポート番号を入力してください。",
		description: "ポート番号を入力してください。"
	}, {
		display: "ロケーション名",
		type: "string",
		length: 20,
		required: true,
		parameterName: "locationName",
		placeholder: "ロケーション名を入力してください。",
		description: "ロケーション名を入力してください。SELECT CURRENT SERVER FROM SYSIBM.SYSDUMMY1 で確認できます）"
	}, {
		display: "スキーマ名",
		type: "string",
		length: 20,
		required: true,
		parameterName: "schema",
		placeholder: "スキーマ名を入力してください。",
		description: "スキーマ名を入力してください。"
	}, {
		display: "ユーザ名",
		type: "string",
		length: 10,
		required: true,
		parameterName: "username",
		placeholder: "ユーザ名を入力してください。",
		description: "ユーザ名を入力してください。"
	}, {
		display: "パスワード",
		type: "secret",
		length: 10,
		required: true,
		parameterName: "password",
		placeholder: "パスワードを入力してください。",
		description: "パスワードを入力してください（保存後は暗号化されます）"
	}],
	// Environment variables used in all JS code (e.g., env.jdbcInfo)
	env: {
		System: Java.type("java.lang.System"),
		DriverManager: Java.type("java.sql.DriverManager"),
		jdbcInfo: "jdbc:db2:",
		sqlSelectTest: "select * from SYSIBM.SYSTABLES FETCH FIRST 1 ROWS ONLY",
		leftQuote: "\"",
		rightQuote: "\""

	},
	// Capabilities
	options: {
		canCommit: true
	}
};
if (log.isDebugEnabled()) {
	log.debug("DB2 - getConfigInfo return" + configInfo);
}
log.info("End DB2 getConfigInfo code");
return configInfo;
