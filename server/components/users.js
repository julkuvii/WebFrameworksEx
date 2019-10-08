const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
    db.query('SELECT * FROM userList').then(results => {
        res.json(results)
    })
    .catch(() => {
        res.sendStatus(500);
    })
});

router.get('/:usersId', (req, res) => {
    db.query('SELECT * FROM userList WHERE id = ?', [req.params.usersId])
        .then(results => {
        res.json(results)
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    db.query('INSERT INTO userList (firstname, lastname, phone, registration, username, password) VALUES (?, ?, ?, ?, ?, ?)',
    [   req.body.firstname,
        req.body.lastname,
        req.body.phone,
        req.body.registration,
        req.body.username,
        req.body.password ])
    .then(results => {
        console.log(results);
        res.sendStatus(201);
    })
    .catch(() => {
        res.sendStatus(500);
    });
});

router.delete('/:usersId', (req, res) => {
    db.query('DELETE FROM userList WHERE id = ?', [req.params.usersId])
        .then(results => {
            res.sendStatus(200);
        })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
})

module.exports = router;