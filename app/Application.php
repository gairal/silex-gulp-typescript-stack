<?php
/**
 * Created by IntelliJ IDEA.
 * User: frankgairal
 * Date: 9/12/16
 * Time: 8:22 PM
 */

namespace Acme;

use Silex\Application\TwigTrait;
use Silex\Provider\TwigServiceProvider;

class Application extends \Silex\Application
{
    use TwigTrait;
    /**
     * Application configuration.
     *
     * @param string $dm Domain name
     *
     * @return $this
     */
    public function configure()
    {
        ini_set('date.timezone', 'Asia/Ho_Chi_Minh');

        $this->register(new TwigServiceProvider(), [ // must be last
            'twig.path'           => __DIR__.'/../src/views'
        ]);

        //Route definitions
        $this->mount('/', new Controllers\Providers\MainControllerProvider());

        return $this;
    }
}
