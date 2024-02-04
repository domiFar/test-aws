const WriteIntoDatabase = () => {
  let name = document.getElementById('nameInput')
  let password = document.getElementById('passwordInput')
  console.log(encrypt(name.value, 3))
  let daten = { wert: ("{" + encrypt(name.value, 5) + "," + encrypt(password.value, 5) + "},") };

fetch('http://localhost:3000/endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(daten),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Fehler:', error);
});
}
  
function encrypt (text, displacement) {
   let verschluesselterText = '';
  
   for(let i = 0; i < text.length; i++) {
       let charCode = text.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90) {
           verschluesselterText += String.fromCharCode((charCode - 65 + displacement) % 26 + 65);
       } else if(charCode >= 97 && charCode <= 122) {
           verschluesselterText += String.fromCharCode((charCode - 97 + displacement) % 26 + 97);
       } else {
           verschluesselterText += text.charAt(i);
       }
   }
    return verschluesselterText.split('').reverse().join('');
}

const decrypt = (text, displacement) => {
  let entschluesselterText = '';

    for(let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);

        if(charCode >= 65 && charCode <= 90) {
            entschluesselterText += String.fromCharCode((charCode - 65 - displacement + 26) % 26 + 65);
        } else if(charCode >= 97 && charCode <= 122) {
            entschluesselterText += String.fromCharCode((charCode - 97 - displacement + 26) % 26 + 97);
        } else {
            entschluesselterText += text.charAt(i);
        }
    }

    return entschluesselterText.split('').reverse().join('');
}