try {
  var data = JSON.parse(http_request_body);
  var point = data.x + ',' + data.y;

  setLocal('token', data.token);
  setLocal('point', point);
} catch (e) {
  flash('Error parsing JSON ' + e.message);
}
