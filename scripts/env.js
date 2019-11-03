const DB = process.env.DB;
const USER = process.env.USER;
const PW = process.env.PW;
const INSTANCE_NAME = process.env.HOST;
const DB_PORT = process.env.DB_PORT;
const NODE_ENV = process.env.NODE_ENV;

const { exec } = require("child_process");
const cmd = `HOST=${INSTANCE_NAME} DB=${DB} PW=${PW} USER=${USER} NODE_ENV=${NODE_ENV} envsubst < app.yaml.template > app.yaml`;

exec(cmd, (err, out, stderr) => {
	if(err !== null) console.error("error!");
	console.log("done");
});
