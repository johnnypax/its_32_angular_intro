const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dati di esempio
let animali = [
    {
        id: 1,
        nome: 'Leo',
        specie: 'Leone',
        peso: 190,
        hasPeli: true,
        provenienza: 'Africa'
    },
    {
        id: 2,
        nome: 'Polly',
        specie: 'Pappagallo',
        peso: 1.2,
        hasPeli: false,
        provenienza: 'Sud America'
    },
    {
        id: 3,
        nome: 'Nemo',
        specie: 'Pesce Pagliaccio',
        peso: 0.3,
        hasPeli: false,
        provenienza: 'Oceano Pacifico'
    }
];
let nextId = 4;

// CREATE - Aggiungi un nuovo animale
app.post('/animali', (req, res) => {
    const nuovoAnimale = {
        id: nextId++,
        nome: req.body.nome || '',
        specie: req.body.specie || '',
        peso: req.body.peso || 0,
        hasPeli: req.body.hasPeli || false,
        provenienza: req.body.provenienza || ''
    };
    animali.push(nuovoAnimale);
    res.status(201).json(nuovoAnimale);
});

// READ - Ottieni tutti gli animali
app.get('/animali', (req, res) => {
    res.json(animali);
});

// READ - Ottieni un animale per ID
app.get('/animali/:id', (req, res) => {
    const animale = animali.find(a => a.id === parseInt(req.params.id));
    if (animale) {
        res.json(animale);
    } else {
        res.status(404).json({ message: 'Animale non trovato' });
    }
});

// UPDATE - Modifica un animale esistente
app.put('/animali/:id', (req, res) => {
    const index = animali.findIndex(a => a.id === parseInt(req.params.id));
    if (index !== -1) {
        animali[index] = {
            id: animali[index].id,
            nome: req.body.nome || animali[index].nome,
            specie: req.body.specie || animali[index].specie,
            peso: req.body.peso || animali[index].peso,
            hasPeli: req.body.hasPeli !== undefined ? req.body.hasPeli : animali[index].hasPeli,
            provenienza: req.body.provenienza || animali[index].provenienza
        };
        res.json(animali[index]);
    } else {
        res.status(404).json({ message: 'Animale non trovato' });
    }
});

// DELETE - Elimina un animale
app.delete('/animali/:id', (req, res) => {
    const index = animali.findIndex(a => a.id === parseInt(req.params.id));
    if (index !== -1) {
        const animaleRimosso = animali.splice(index, 1);
        res.json(animaleRimosso[0]);
    } else {
        res.status(404).json({ message: 'Animale non trovato' });
    }
});

// Avvio del server
app.listen(port, () => {
    console.log(`API REST avviata su http://localhost:${port}`);
});
