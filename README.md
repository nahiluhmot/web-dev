# NU CS 4550 Web Development

This repository contains the homework source for [Northeastern CS 4550 Web Development](http://www.ccs.neu.edu/teaching/web/).

## Building

This project depends on [`git`](http://git-scm.com/) [`node`](http://nodejs.org/) version 0.10.*, and [`npm`](https://www.npmjs.com/) which is now packaged with Node.
Once you have those two dependencies installed, run the following to bootstrap this application:

```shell
~/ $ npm install -g bower
~/ $ npm install -g gulp
~/ $ git clone https://github.com/nahiluhmot/web-dev.git web-dev
~/web-dev/ $ cd web-dev
~/web-dev/ $ npm install
~/web-dev/ $ bower install
```

Assuming that all worked, you can now run the serve via the following command:

```shell
~/web-dev/ $ gulp serve
```

While this is running, you can hit `http://localhost:1337/` in your browser to view the application.
