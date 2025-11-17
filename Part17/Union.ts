// Basic idea

let value : string  | number

value = "Hellow"
value = 42


// Union matters in realworld

type Success = { status: "ok"; data: string };
type Error = { status: "error"; message: string };

type ApiResponse = Success | Error;

function handleResponse(res: ApiResponse) {
  if (res.status === "ok") {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
}

handleResponse({status : 'ok' , data : "Everyrhing is good and fine "})
const errRes: Error = { status: "error", message: "Got an error" };
handleResponse(errRes); 
