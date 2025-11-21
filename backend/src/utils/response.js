export function success(res, data, message = "OK") {
  return res.status(200).json({ success: true, message, data });
}

export function error(res, message = "Error") {
  return res.status(400).json({ success: false, message });
}
