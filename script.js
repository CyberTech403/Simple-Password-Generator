const passwordGenerateBox = document.getElementById("password");

function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const addLowercase = document.getElementById("lowercase").checked;
  const addUppercase = document.getElementById("uppercase").checked;
  const addNumbers = document.getElementById("numbers").checked;
  const addSymbols = document.getElementById("symbols").checked;

  const chars = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIGKLMNOPQRSTUVWXYZ",
    "0123456789",
    "@%+/'!#$^?:,)(}{][~-_."
  ];

  const allowedChars = [addLowercase, addUppercase, addNumbers, addSymbols]
    .map((set, index) => (set ? chars[index] : ""))
    .join("");

  if (length < 8 || length > 128 || allowedChars.length === 0) {
    const message = length < 8 ? "(Password must be at least 8 characters)" :
                    length > 128 ? "(Password length cannot exceed 128 characters)" :
                    "(At least 1 set of parameters must be selected)";
    alert(message);
    return;
  }

  const password = Array.from({ length }, () => allowedChars[Math.floor(Math.random() * allowedChars.length)]).join("");
  passwordGenerateBox.textContent = password;
  
  return password;
}
