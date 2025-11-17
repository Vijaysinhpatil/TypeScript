// Basic idea
var value;
value = "Hellow";
value = 42;
function handleResponse(res) {
    if (res.status === "ok") {
        console.log(res.data);
    }
    else {
        console.log(res.message);
    }
}
handleResponse({ status: 'ok', data: "Everyrhing is good and fine " });
var errRes = { status: "error", message: "Got an error" };
handleResponse(errRes);
