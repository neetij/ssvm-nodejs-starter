
Getting to know Rust, Node, and WASM. 

![Build and test](https://github.com/second-state/ssvm-nodejs-starter/workflows/Build%20and%20test/badge.svg)

# Notes

This repo is courtesy SecondState's (Raspberry Pi giveaway)[https://www.secondstate.io/articles/raspberry-pi-for-free-20200709/].  
[Fork the original project](https://github.com/second-state/ssvm-nodejs-starter/fork) to create your own Rust functions in Node.js. [Learn more](https://www.secondstate.io/articles/getting-started-rust-nodejs-vscode/)

# Use Docker to build and run

```
$ docker build -t ssvm-nodejs:v1 .
$ docker run -p 3000:3000 --rm -it -v $(pwd):/app ssvm-nodejs:v1
(docker) # cd /app
(docker) # ssvmup -v build
(docker) # node node/server.js
```

Open [http://localhost:3000/](http://localhost:3000/) in your favourite modern browser (Firefox).
