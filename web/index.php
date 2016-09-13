<?php
/**
 * Created by IntelliJ IDEA.
 * User: frankgairal
 * Date: 9/12/16
 * Time: 8:22 PM
 */

require_once __DIR__.'/../vendor/autoload.php';
require_once __DIR__.'/../app/Application.php';

$debug = true;

$app = new \Acme\Application(['debug' => $debug]);

$app
    ->configure()
    ->run();
