let text = "My phone number is 555-123-4567. My email is john.doe@example.com.";

// for phone number
let phoneNumberPattern = /\d{3}-\d{3}-\d{4}/;
let phoneNumberMatch = text.match(phoneNumberPattern);
if (phoneNumberMatch) {
    let extractedPhoneNumber = phoneNumberMatch[0];
    console.log("Extracted phone number:", extractedPhoneNumber);
}

// for email
let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
let emailMatch = text.match(emailPattern);
if (emailMatch) {
    let extractedEmail = emailMatch[0];
    console.log("Extracted email address:", extractedEmail);
}

let newText = text.replace(phoneNumberPattern, "XXX-XXX-XXXX");
console.log("Text with replaced phone number:", newText);

let emailPattern2 = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})/;
let emailMatch2 = text.match(emailPattern2);

if(emailMatch2){
    console.log("username: ", emailMatch2[1]);
    console.log("domain: ", emailMatch2[2]);
    console.log("tld: ", emailMatch2[3]);
}