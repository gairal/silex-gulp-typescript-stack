install:
	composer install
	npm install

run-php:
	php -S localhost:3000 -t web

run-assets:
	gulp

build-assets:
	gulp build

test:
	vendor/bin/phpunit
