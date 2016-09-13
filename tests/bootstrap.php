<?php

require_once __DIR__.'/../vendor/autoload.php';
require_once __DIR__.'/../app/Application.php';

class WebTestCase extends \Silex\WebTestCase
{
    public static $_app;

    /**
     * @return \Acme\Application
     */
    public function createApplication()
    {
        if (self::$_app === null) {
            self::$_app = new \Acme\Application([
                'debug' => true,
            ]);
            self::$_app->configure();

            unset(self::$_app['exception_handler']);
        }

        return self::$_app;
    }
}
