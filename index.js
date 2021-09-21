import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const App = express();

App.use('/posts', postRoutes);

App.use(express.json({limit: "30mb", extended: true}));
App.use(express.urlencoded({limit: "30mb", extended: true}));
App.use(cors());

const CONNECTION_URL = 'mongodb+srv://danieljacquin123:danieljacquin123@cluster0.esdqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewURLParser: true, useUnifiedTopology: true})
        .then(() => App.listen(PORT, () => console.log(`Server is running on the port ${PORT}`)))
        .catch((error) => console.error(error.message));
