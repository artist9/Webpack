import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from "react";
import { createRoot } from 'react-dom/client';
import {App} from "./app";

const app = <App />;

createRoot(document.getElementById('root')).render(app);
