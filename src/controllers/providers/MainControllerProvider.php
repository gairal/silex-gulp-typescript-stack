<?php
/**
 * Created by IntelliJ IDEA.
 * User: frankgairal
 * Date: 9/12/16
 * Time: 8:19 PM
 */

namespace Acme\Controllers\Providers;

use Silex\Application;
use Silex\Api\ControllerProviderInterface;

class MainControllerProvider implements ControllerProviderInterface {
    public function connect(Application $app) {
        $controllers = $app['controllers_factory'];

        $controllers->get('/', 'Acme\Controllers\MainController::homeAction')->bind('home');

        $controllers->get('/page1', 'Acme\Controllers\MainController::page1')->bind('page1');

        $controllers->get('/page2', 'Acme\Controllers\MainController::page2')->bind('page2');

        return $controllers;
    }
}
