const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_app'
});

connection.connect((err) => {
    if (err) {
        console.error('DATA_BASE ERROR : ' + err.stack);
        return;
    }
    console.log('CONNECTION_SUCCEEDED.');
});

// Exemple de requête
 

//connection.end();

module.exports = connection ;



















/*

const sqlite3 = require('sqlite3').verbose();

// Ouvrir une connexion à la base de données
let db = new sqlite3.Database('C:/Users/RON_ALLOGO/Desktop/season_project_js/backend/config/BD.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connexion à la base de données SQLite réussie.');
});

// Créer une table
/*db.serialize(() => {
    db.run(`CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL
    )`);

    // Insérer des données
    db.run(`INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')`, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Données insérées avec succès.');
    });
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connexion à la base de données SQLite fermée.');
    });
    
    
    
    
});*/

// Fermer la connexion à la base de données