<?php

$EmailFrom = Trim(stripslashes($_POST['name'])); 
$EmailTo = "info@tom-egan.com";
$Subject = "[NEW] tom-egan.com message";
$Name = Trim(stripslashes($_POST['name'])); 
$Tel = Trim(stripslashes($_POST['phone'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Company = Trim(stripslashes($_POST['company'])); 
$Message = Trim(stripslashes($_POST['message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// detect mobile
function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}

// prepare email body text
if(isMobile()){
    $Body .= "";
	$Body .= "[Sent From Contact Page on Mobile]\n\n";
}
else {
    $Body .= "";
	$Body .= "[Sent From Contact Page on Desktop]\n\n";
}
$Body .= "Name ------ ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Phone ----- ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email ----- ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Company --- ";
$Body .= $Company;
$Body .= "\n\n=============================================\n";
$Body .= "Message:\n";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contact-msg#sent\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>