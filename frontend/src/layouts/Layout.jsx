import MainLayout from '../layouts/MainLayout.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import { isAdmin } from '../config/isAdmin.js';

export const Layout = isAdmin ? AdminLayout : MainLayout;