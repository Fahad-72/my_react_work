import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
plugins: [
react(),
VitePWA({
registerType: 'autoUpdate',
includeAssets: [
'pwa-192x192.png',
'pwa-512x512.png',
'maskable-512x512.png'
],
manifest: {
name: 'countries',
short_name: 'countries app',
description: 'My awesome React + Vite PWA',
theme_color: '#0f172a',
background_color: '#0f172a',
display: 'standalone',
scope: '/',
start_url: '/',
orientation: 'portrait-primary',
icons: [
{ src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
{ src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
{ src: '/maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
]
},
workbox: {
globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff2}'],
runtimeCaching: [
{
urlPattern: ({ request }) => request.destination === 'document',
handler: 'NetworkFirst',
options: { cacheName: 'html-cache' }
},
{
urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
handler: 'StaleWhileRevalidate',
options: { cacheName: 'asset-cache' }
},
{
urlPattern: ({ request }) => request.destination === 'image',
handler: 'CacheFirst',
options: {
cacheName: 'image-cache',
expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 }
}
}
]
}
})
]
})