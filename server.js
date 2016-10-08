'use strict';

const express = require('express');

const DEFAULT_PORT = 3000;

let app = express();

app.listen(process.env.PORT || DEFAULT_PORT);
