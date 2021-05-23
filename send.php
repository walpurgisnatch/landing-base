<?php

$to        = 'mail';
$subject   = 'the subject';
$message   = 'hello';
$headers   = 'From: bence@mail.com';

// telegram
$token = "1222671661:AAEQiIfUnT6VkVli9Tn8erk5j8r887Q84lo";
$chat_id = "-481116089";

if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);

    $arr = array(
        'Name:' => $name,
        'From:' => $phone
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    mail($to, $subject, $message, $headers);

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        echo('ok');
    }
    else {
        echo('error');
    }
}

?>
