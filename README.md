# Novo SGA

[![Packagist](http://img.shields.io/packagist/v/novosga/novosga.svg)](https://packagist.org/packages/novosga/novosga)
[![Packagist](http://img.shields.io/packagist/dt/novosga/novosga.svg)](https://packagist.org/packages/novosga/novosga)
[![Packagist](http://img.shields.io/packagist/dm/novosga/novosga.svg)](https://packagist.org/packages/novosga/novosga)
[![Packagist](http://img.shields.io/packagist/dd/novosga/novosga.svg)](https://packagist.org/packages/novosga/novosga)

Sistema de Gerenciamento de Atendimento adaptável para grandes e pequenas organizações.

Visite o site para maiores informações: http://novosga.org

## Instalação

Instalação feita via [Composer](http://getcomposer.org/)

*Produção*

```sh
php composer.phar create-project novosga/novosga novosga "1.*"
```

*Ou a versão de desenvolvimento*

```sh
git clone https://github.com/novosga/novosga
cd novosga
php composer.phar install
```
Note: After installation remember to change the owner of the novosga directory: Example su chown apache:apache novosga -R
