import express = require('express');

module.exports.controller = app => {

    app.get('/users',(req: express.Request, res: express.Response) => {

        res.json({ name: 'scott' });
    });

}