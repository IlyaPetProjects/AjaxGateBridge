var configPath = "Tasker/scripts/config.json";

var config = {};
try {
  var fileContent = readFile(configPath);
  if (fileContent) {
    config = JSON.parse(fileContent);
  } else {
    flash("Error: Config file empty or not found");
    exit();
  }
} catch (e) {
  flash("Config JSON Parse Error: " + e.message);
  exit();
}

var CORRECT_TOKEN = config.PHONE_TOKEN;

if (token !== CORRECT_TOKEN) {
  flash("Token is invalid: " + token);
  setGlobal('openGateResponseCode', 403);
} else {
  setGlobal('openGateResponseCode', 200);
}

wait(50);
