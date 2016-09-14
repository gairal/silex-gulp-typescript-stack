<?php

class HomepageTest extends WebTestCase
{
    public function testHome()
    {
      $client  = $this->createClient();
      $client->request('GET', '/');

      $this->assertTrue($client->getResponse()->isOk());
      $this->assertContains('Welcome to Silex', $client->getResponse()->getContent());
    }
}
