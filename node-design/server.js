const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template Engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');

// Routes
app.get('/', (req, res) => {
    const memberData = {
        name: "உதாரண பெயர்",
        boothNo: "123",
        constituency: "சென்னை",
        district: "சென்னை",
        state: "தமிழ்நாடு",
        memberId: "WJB2199364"
    };
    res.render('index', { 
        title: 'TVK ID Card Design',
        member: memberData
    });
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
