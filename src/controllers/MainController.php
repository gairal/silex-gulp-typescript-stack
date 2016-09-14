<?php
/**
 * Created by IntelliJ IDEA.
 * User: frankgairal
 * Date: 9/12/16
 * Time: 8:19 PM
 */

namespace Acme\Controllers;

use Silex\Application;
use Acme\Model;

class MainController {
    public function homeAction(Application $app) {
        return $app['twig']->render('pages/home.html.twig');
    }

    public function page1(Application $app) {

        return $app['twig']->render('pages/page1.html.twig');
    }

    public function calculator(Application $app) {

        return $app['twig']->render('pages/calculator.html.twig');
    }
}
