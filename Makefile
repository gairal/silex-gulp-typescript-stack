install:
	composer install
	npm install

run-php:
	php -S localhost:3000 -t web

run-assets:
	gulp

test:
  vendor/bin/phpunit
